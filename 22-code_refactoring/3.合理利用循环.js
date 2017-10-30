var funcArr = [func1, func2, func3];

for (var i = 0, func; func = funcArr[i++];) {
  if (!func) {
    return;
  }
  func();
  break;
}