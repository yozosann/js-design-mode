function Person(name) {
  this.name = name;
};

Person.prototype.getName = function () {
  return this.name;
};

var a = new Person('yozo');

var objectFactory = function() {
  var obj = new Object();
      Constructor = [].shift.call(arguments);
  obj.__proto__ = Constructor.prototype; // 指向正确的原型
  var ret = Constructor.apply(obj, arguments);

  return typeof ret === 'object' ? ret : obj; // 确保构造器总是返回一个对象
}

var a1 = objectFactory(Person, 'yoko');
console.log(a.getName());
console.log(a1.getName());