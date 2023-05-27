// Create a new string called "myNewString" that holds the value of "Developer", using the value from "myString"
const myString = 'developer';
let newString = `${myString.charAt(0).toUpperCase() + myString.slice(1, myString.length)}`
//could also use let newstring = mystring[0].toUpperCase() + myString.substring(1)
console.log(newString);
