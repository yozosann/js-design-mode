Function.prototype.bind = function () {
  var self = this;
  var context = [].shift.call(arguments);
  var args = [].slice.call(arguments);
  return function () {
    self.apply(context, [].concat.call(args, [].slice.call(arguments)));
  }
}

var obj = {
  name: 'yozo'
}

var func = function (a, b, c, d) {
  console.log(this.name);
  console.log([a, b, c, d]);
}.bind(obj, 1, 2);

func(3, 4);