function curring(fn) {
  var args = []; // 保存不计算的值

  return function () {
    if (arguments.length === 0) {
      return fn.apply(this, args);
    } else {
      [].push.apply(args, arguments);
    }
  }
}

var cost = (function () {
  var money = 0; // 用于记录累加的值

  return function () {
    for (var i = 0, l = arguments.length; i < l; i++) {
      money += arguments[i];
    }
    return money;
  }
})()

var cost = curring(cost);
cost(100);
cost(200);
cost(300);
console.log(cost()); // 600