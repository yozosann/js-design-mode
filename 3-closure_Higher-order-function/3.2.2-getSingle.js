var getSingle = function (fn) {
  var ret;
  return function () {
    return ret || (ret = fn.apply(this, arguments));
  }
}

var getObj = getSingle(function () {
  return {};
})

var obj1 = getObj();
var obj2 = getObj();

console.log(obj1 === obj2);