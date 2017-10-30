var Beverage = function() {};

Beverage.prototype.boilWater = function(){
  console.log('把水煮沸');
};

// 空方法，应该由子类来重写
Beverage.prototype.brew = function() {
  throw new Error('子类必须重写brew方法');
};

// 空方法，应该由子类来重写
Beverage.prototype.pourInCup = function() {
  throw new Error('子类必须重写pourInCup方法');
};

// 空方法，应该由子类来重写
Beverage.prototype.addCondiments = function() {
  throw new Error('子类必须重写addCondiments方法');
};

Beverage.prototype.init = function() {
  this.boilWater();
  this.brew();
  this.pourInCup();
  this.addCondiments();
};

var Coffee = function() {};

Coffee.prototype = new Beverage();

Coffee.prototype.brew = function() {
  console.log('用水冲泡咖啡');
};

Coffee.prototype.pourInCup = function() {
  console.log('把咖啡倒进杯子里');
};

Coffee.prototype.addCondiments = function() {
  console.log('加糖和牛奶');
};

var coffee = new Coffee();
coffee.init();

var Tea = function() {};

Tea.prototype = new Beverage();

Tea.prototype.brew = function() {
  console.log('用水浸泡茶');
};

Tea.prototype.pourInCup = function() {
  console.log('把茶水倒进杯子里');
};

Tea.prototype.addCondiments = function() {
  console.log('加柠檬');
};

var tea = new Tea();
tea.init();