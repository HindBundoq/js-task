// ==========================================
// Basic Tasks
// ==========================================

// 1. Check if "age" is greater than 18
let age = 27;
if (age > 18) {
    console.log("You are an adult");
}

// 2. Check if "num" is divisible by 2 (even)
let num = 4;
if (num % 2 === 0) {
    console.log("The number is even");
}

// ==========================================
// Mid Tasks
// ==========================================

// 3. Check if "char" is a letter (using regex or simple range/type check)
let char = "a";
if (typeof char === "string" && char.length === 1 && /[a-zA-Z]/.test(char)) {
    console.log("It's a letter");
}

// 4. Check if "list" is an array
let list = [1, 2, 3];
if (Array.isArray(list)) {
    console.log("It's an array");
}

// 5. Check if "x" is a positive number
let x = 5;
if (typeof x === "number" && x > 0) {
    console.log("x is a positive number");
}

// ==========================================
// Advanced Tasks
// ==========================================

// 9. Check if "z" is a multiple of 3
let z = 9;
if (z % 3 === 0) {
    console.log("z is a multiple of 3");
}

// 10. Check if "password" is at least 8 characters long
let password = "mypassword123";
if (password.length >= 8) {
    console.log("Your password is strong");
}

// 11. Check if "age" is between 18 and 65 (inclusive)
let userAge = 30;
if (userAge >= 18 && userAge <= 65) {
    console.log("You are of working age");
}

// 12. Check if "color" is either "red", "green", or "blue"
let color = "red";
if (color === "red" || color === "green" || color === "blue") {
    console.log("color is a primary color");
}

// 13. Function `isValidNumber()` checks if input variable is a number using `isNaN()`
function isValidNumber(input) {
    // Note: isNaN converts strings to numbers, so we also check if it's not an empty string/boolean
    if (input !== "" && typeof input !== "boolean" && !isNaN(input)) {
        console.log(input + " is a valid number");
    } else {
        console.log(input + " is not a number");
    }
}

// Test cases for isValidNumber:
isValidNumber(11);      // "11 is a valid number"
isValidNumber("19");    // "19 is a valid number"
isValidNumber("xyz");   // "xyz is not a number"
isValidNumber("17.5");  // "17.5 is a valid number"
isValidNumber("21F");   // "21F is not a number"