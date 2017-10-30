var Event = (function () {
  var cacheList = {},
    trigger,
    remove,
    listen;

  listen = function (key, fn) {
    if (!cacheList[key]) {
      cacheList[key] = [];
    }
    cacheList[key].push(fn);
  };

  remove = function (key, fn) {
    var fns = cacheList[key];
    if (!fns) return false;
    // 如果只传了key 代表取消该key下所有客户
    if (!fn) {
      fns && (fns.length = 0);
    } else {
      for (var i = fns.length - 1; i >= 0; i--) {
        if (fns[i] === fn) {
          fns.splice(i, 1);
        }
      }
    }
  };

  trigger = function () {
    var key = Array.prototype.shift.call(arguments),
      args = arguments,
      fns = cacheList[key];

    if (!fns || fns.length === 0) return false;

    for (var i = 0, fn; fn = fns[i++];) {
      fn.apply(this, args);
    }
  }

  return {
    trigger,listen,remove
  }
})()

Event.listen('click', function (a, b, c) {
  console.log(a + b + c);
})

Event.listen('click', function (a, b, c) {
  console.log(a - b - c);
})

Event.listen('click', function (a, b, c) {
  console.log(a * b * c);
})

Event.trigger('click', 1, 3, 4)