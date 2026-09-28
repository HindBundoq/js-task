// ==========================================
// Basic
// ==========================================

// 1. Find the smallest value in an array
function findSmallest(arr) {
    return Math.min(...arr);
}
console.log(findSmallest([30, 45, 60, 7]));


// 2. Return your string in alphabetical order
function AlphabeticalOrder(str) {
    return str.split('').sort().join('');
}
console.log(AlphabeticalOrder('hello'));


// 3. Calculate the factorial of a number
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(8));


// 4. Check if a number is Even or Odd
function oddOrEven(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(oddOrEven(9));



// ==========================================
// Mid
// ==========================================

// 5. Add up numbers from 0 to the given number
function addUp(num) {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        sum += i;
    }
    return sum;
}
console.log(addUp(8));


// 6. Get min, max, length, and average stored in a new array
function minMaxLengthAverage(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let length = arr.length;
    
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let average = sum / length;

    return [min, max, length, average];
}
console.log(minMaxLengthAverage([7, 13, 3, 77, 100]));



// ==========================================
// Advanced
// ==========================================

// 7. Return how many words were given
function countWords(str) {
    return str.trim().split(/\s+/).length;
}
console.log(countWords('hello from CodingAcademy!'));


// 8. Multiply all elements in an array by its length
function MultiplyByLength(arr) {
    let len = arr.length;
    let result = [];
    for (let i = 0; i < len; i++) {
        result.push(arr[i] * len);
    }
    return result;
}
console.log(MultiplyByLength([4, 2, 5]));


// 9. Check if str1 ends with the characters in str2
function checkEnding(str1, str2) {
    return str1.endsWith(str2);
}
console.log(checkEnding("CodingSchool", "Ac"));


// 10. Repeat each string character two times
function doubleChar(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        result += str[i] + str[i];
    }
    return result;
}
console.log(doubleChar('Coding'));


// 11. Return the index location of an element from a given array
function findIndex(arr, element) {
    return arr.indexOf(element);
}
console.log(findIndex(['Ali', 'Mazen', 'Ayham', 'Murad'], 'Ali'));