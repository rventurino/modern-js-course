const rectangle = {
  name: 'rectangle1',
  width: 10,
  height: 10,
  area: function () {
    return this.width * this.height;
  },
};

console.log(rectangle.area());
console.log('this: ', this);