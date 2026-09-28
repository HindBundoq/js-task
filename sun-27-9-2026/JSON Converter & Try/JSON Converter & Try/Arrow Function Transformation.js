// --- Exercise 7: Arrow Function Transformation Solution ---

// 1. Square of a number
const square = num => num * num;
console.log("Square of 4:", square(4));

// 2. Check whether a number is even
const isEven = num => num % 2 === 0;
console.log("Is 6 even?:", isEven(6));

// 3. Arrow functions with map, filter, and reduce
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
const sum = numbers.reduce((acc, curr) => acc + curr, 0);

console.log("Doubled:", doubled);
console.log("Evens:", evens);
console.log("Sum:", sum);