var getPrice = function(price) {
  var date = new Date();
  if(date.getMonth() >= 6 && date.getMonth() <= 9) {
    return price * 8;
  }

  return price;
}

function isSummer() {
  return date.getMonth() >= 6 && date.getMonth() <= 9;
}