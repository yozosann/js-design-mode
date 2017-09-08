Function.prototype.before = function (fn) {
  var _self = this; // 保存原函数的引用
  return function () { // 返回了包含原函数和新函数的代理函数
    fn.apply(this, arguments);
    return _self.apply(this, arguments); // 执行原函数
  }
}

Function.prototype.after = function (fn) {
  var _self = this; // 保存原函数的引用
  return function () {
    var ret = _self.apply(this, arguments);
    fn.apply(this, arguments);
    return ret;
  }
}

var func = function () {
  console.log(2);
}

func = func.before(function () {
  console.log(1);
}).after(function () {
  console.log(3);
})

func(); // 1, 2, 3