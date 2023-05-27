//Create a variable called x that is a random number between 1 and 100
let x = Math.floor(Math.random() * 99 + 1)
// variable called y that is a random number between 1 and 50
let y = Math.floor(Math.random() * 49 + 1)

//Create a variable for the sum, difference, product, quotient and remainder of x and y. 
//Log the output in a string that shows the two numbers of x and y along with the operator and result.

const sum = x + y;
const difference = x - y
const product = x * y
const quotient = x / y
const remainder = x % y

console.log(`Sum: ${sum}\nDifference:  ${difference}\nProduct:  ${product}\nQuotient:  ${quotient}\nRemainder:  ${remainder}`)

for (let index = 0; index < 1000; index++) {
    console.log(Math.floor(Math.random() * 99+ 1))
    
}