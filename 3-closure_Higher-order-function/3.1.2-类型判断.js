var Type = (function () {
  var Type = {};
  for (var i = 0, type; type = ['String', 'Number', 'Array'][i++];) {
    (function (type) {
      Type['is' + type] = function (obj) {
        return Object.prototype.toString.call(obj) === '[object ' + type + ']';
      }
    })(type)
  }
  return Type;
})();

console.log(Type.isArray([]));
console.log(Type.isString(''));