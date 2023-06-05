let celcius = (far) => {
    return (far-32) * 5 /9;
}

console.log("F to C: " + celcius(32));

const myArray = [1, 2, 3, 4, 5, 6, 10]

let minMax = (anArray) => {   
    return `Maximum: ${Math.max(...anArray)} \nMinimum: ${Math.min(...anArray)}`
}

console.log(`minMax: \n${minMax(myArray)}`);

(function(len, wid){
    console.log(`The area of a rectangle with length of ${len} and width of ${wid} is ${len * wid} `);
})(10, 5)

