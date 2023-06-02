/*
const arr = [1, 2, 3, 4, 5]

arr.unshift(0)

arr.push(6)

arr.reverse()

console.log(arr);
*/
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];
const arr3 = [...arr1.slice(0,4), ...arr2.slice(0, arr2.length)]
console.log(arr3);