// ==========================================
// Basic
// ==========================================

// 1. Use a while loop to print numbers from 1 to 10
let i = 1;
let result1 = "";
while (i <= 10) {
    result1 += i + " ";
    i++;
}
console.log(result1.trim());


// 2. Use a for loop to iterate through an array and print each element
let arr2 = [1, 2, 3, 4, 5];
let result2 = "";
for (let i = 0; i < arr2.length; i++) {
    result2 += arr2[i];
}
console.log(result2);


// 3. Use a for loop to print even numbers from 0 to 10
let result3 = "";
for (let i = 0; i <= 10; i += 2) {
    result3 += i + " ";
}
console.log(result3.trim());


// 4. Use a for loop to print the sum of numbers from 1 to 10
let sum4 = 0;
for (let i = 1; i <= 10; i++) {
    sum4 += i;
}
console.log(sum4);


// 5. Use a for loop to find the largest number in an array
let arr5 = [1, 2, 3, 4, 5];
let max = arr5[0];
for (let i = 1; i < arr5.length; i++) {
    if (arr5[i] > max) {
        max = arr5[i];
    }
}
console.log(max);


// 6. Use a for loop to find the average of numbers in an array
let arr6 = [1, 2, 3, 4, 5];
let sum6 = 0;
for (let i = 0; i < arr6.length; i++) {
    sum6 += arr6[i];
}
let average = sum6 / arr6.length;
console.log(average);



// ==========================================
// Mid
// ==========================================

// 7. Use a for loop to find the factorial of a number
let n7 = 5;
let factorial = 1;
for (let i = 1; i <= n7; i++) {
    factorial *= i;
}
console.log(factorial);


// 8. Use a for loop to print the Fibonacci sequence up to a given count
let limit8 = 10;
let fib = [0, 1];
for (let i = 2; i < limit8; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
}
console.log(fib.join(" "));


// 9. Use a for loop to print the prime numbers up to a given number
let limit9 = 20;
let primes = [];
for (let i = 2; i <= limit9; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        primes.push(i);
    }
}
console.log(primes.join(" "));



// ==========================================
// Advanced
// ==========================================

// 10. Use a for loop to print the elements of a 2D array
let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let result10 = "";
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        result10 += matrix[i][j] + " ";
    }
}
console.log(result10.trim());


// 11. Use a for loop to print the elements of an array in reverse order
let arr11 = [1, 2, 3, 4, 5];
let result11 = "";
for (let i = arr11.length - 1; i >= 0; i--) {
    result11 += arr11[i] + " ";
}
console.log(result11.trim());


// 12. Use a for loop to print the elements of an array with a specific step
let arr12 = [1, 2, 3, 4, 5];
let step = 2;
let result12 = "";
for (let i = 0; i < arr12.length; i += step) {
    result12 += arr12[i];
}
console.log(result12);


// 13. Use a for loop to find the frequency of a number in an array
let arr13 = [1, 2, 1, 3, 2, 1];
let target = 1;
let frequencyCount = 0;
for (let i = 0; i < arr13.length; i++) {
    if (arr13[i] === target) {
        frequencyCount++;
    }
}
console.log(frequencyCount);


// 14. Use the .map() method to transform the heros array
const heros = [
    { name: 'Iron Man', power: 'Tech' },
    { name: 'Spider-Man', power: 'Spider abilities' },
    { name: 'Thor', power: 'Godly powers' },
    { name: 'Hulk', power: 'Super strength' }
];

const newHeros = heros.map((item, index) => {
    return {
        hero: item.name,
        power: item.power,
        id: index
    };
});
console.log(newHeros);


// 15. Use the filter method to return elements with more than 7 characters
function filterLongWords(inputWords) {
    return inputWords.filter(word => word.length > 7);
}

const inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
console.log(filterLongWords(inputWords));


// 16. Use reduce to sum the squares of numbers divisible by 5
const numbers16 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sumSquaredDivisibleBy5 = numbers16.reduce((accumulator, current) => {
    if (current % 5 === 0) {
        return accumulator + (current * current);
    }
    return accumulator;
}, 0);

console.log(sumSquaredDivisibleBy5);