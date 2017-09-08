var mult = function () {
  var a = 1;
  for (var i = 0, l = arguments.length; i < l; i++) {
    a = a * arguments[i];
  }
  return a;
}

var mult_closure = (function () {
  var cache = {};
  return function () {
    var args = Array.prototype.join.call(arguments, ',');
    if (args in cache) {
      return cache[args];
    }
    var a = 1;
    for (var i = 0, l = arguments.length; i < l; i++) {
      a = a * arguments[i];
    }
    return cache[args] = a;
  }
})()

console.log(t1 = new Date());
console.log(mult_closure(1, 2, 3, 4, 5, 5, 5));
console.log(new Date() - t1);
t2 = new Date();
console.log(mult_closure(1, 2, 3, 4, 5, 5, 5));
console.log(new Date() - t2);

// 最终封装 易读版
var mult = (function () {
  var cache = {};
  var caculate = function () {
    var a = 1;
    for (var i = 0, l = arguments.length; i < l; i++) {
      a = a * arguments[i];
    }
    return a;
  }

  return function () {
    var args = Array.prototype.join.call(arguments, ',');
    if (args in cache) {
      return cache[args];
    }

    return cache[args] = caculate.apply(null, arguments);
  }
})