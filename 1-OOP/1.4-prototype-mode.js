var Plane = function(){
  this.blood = 100;
  this.attckLevel = 1;
  this.defenseLevel = 1;
}

var plane = new Plane();
plane.blood = 1000;
plane.attckLevel = 7;
plane.defenseLevel = 10;

var clonePlane = Object.create(plane);
console.log(clonePlane.blood);
console.log(clonePlane.attckLevel);
console.log(clonePlane.defenseLevel);