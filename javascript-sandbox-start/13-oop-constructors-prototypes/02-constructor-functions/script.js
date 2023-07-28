//this initializes the constructor for a new date object
//const now = new Date();

//code convention! Constructors should have capital letter
function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
  this.area = () => {
    return this.width * this.height;
  };
}

const rect1 = new Rectangle('Rect1', 10, 10);
console.log(rect1.area());

const rect2 = new Rectangle('Rect1', 110, 103);
const rect3 = new Rectangle('Rect1', 110, 210);
console.log(rect2.area());
console.log(rect3.area());
//display object constructor
console.log(rect2.constructor);
//ask if object is instance of constructor (bool)
console.log(rect3 instanceof Rectangle);