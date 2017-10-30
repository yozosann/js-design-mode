function getSingleton(fn) {
  var instance = null;
  return function() {
    return instance || (instance = fn.apply(this, arguments) );
  }
}

var createObj = function(name) {
  return {name: name};
}

var getSingleObj = getSingleton(createObj);

console.log(getSingleObj('123') === getSingleObj('321'));