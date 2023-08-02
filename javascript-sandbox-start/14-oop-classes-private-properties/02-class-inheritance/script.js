//parent class
class Shape {
  constructor(name) {
    this.name = name;
  }
}

//sub class
class Rectangle extends Shape {
  constructor(name, width, height) {
    super(name);
    this.height = height;
    this.width = width;
  }
}

const rect = new Rectangle('Rect 1', 20, 20);
console.log(rect);
