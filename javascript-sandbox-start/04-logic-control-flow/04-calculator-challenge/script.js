
const x = 10
const y = 5



const calculator = (num1, num2, operator) => {
    switch(operator){
        case "+":
            console.log(num1 + num2);
            break;
        case "-":
            console.log(num1 - num2);
            break;
        case "/":
            console.log(num1 / num2);
            break;
        case "*":
            console.log(num1 * num2);
            break;
        default:
            console.log("invalid operator");
    }
}

calculator(x, y, "/")