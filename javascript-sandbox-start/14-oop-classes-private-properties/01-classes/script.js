/*
function Rectangle(height, width) {
  this.height = height;
  this.width = width;
}

Rectangle.prototype.area = function () {
  return this.height * this.width;
};

Rectangle.prototype.perimeter = function () {
  return 2 * (this.height + this.width);
};

Rectangle.prototype.isSquare = function () {
  return this.height === this.width;
};

Rectangle.prototype.logArea = function () {
  console.log('Rectangle Area: ' + this.area());
};
*/

class Rectangle {
  constructor(name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;
  }
  area() {
    return this.height * this.width;
  }
  perimeter() {
    return 2 * (this.width + this.height);
  }
}

const square = new Rectangle('Square', 20, 20);
console.log(square.area());
