function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
}

Rectangle.prototype.area  = function () {
  return this.width * this.height;
};

Rectangle.prototype.perimeter  = function () {
  return 2 *(this.width + this.height);
};

Rectangle.prototype.isSquare  = function () {
  return this.width === this.height;
};

Rectangle.prototype.changeName  = function (name) {
  return this.name = name;
};

const rect = new Rectangle('Rect', 10, 10);
console.log(Object.getPrototypeOf(rect));
console.log(rect.area());
