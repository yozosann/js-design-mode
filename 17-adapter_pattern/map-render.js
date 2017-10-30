var googleMap = {
  show() {
    console.log('google地图开始渲染');
  }
}

var baiduMap = {
  display() {
    console.log('baidu地图开始渲染');
  }
}

var renderMap = function( map ) {
  if(map.show instanceof Function) {
    map.show();
  }
}

var baiduMapAdapter = {
  show() {
    return baiduMap.display();
  }
}
