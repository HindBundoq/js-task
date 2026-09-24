// ==========================================
// JavaScript Objects
// ==========================================

// 1. Create an object with properties name, age, and gender and print its values
let person = { name: "Adam", age: 25, gender: "male" };
console.log(person.name, person.age, person.gender);


// 2. Create an object and add a new property using dot notation
let user = { name: "Adam", age: 25 };
user.gender = "male";
console.log(user);


// 3. Access the value of a property in an object using dot notation
let profile = { name: "Adam", age: 25 };
console.log(profile.name);



// ==========================================
// JavaScript Arrays & Built-in Methods
// ==========================================

// 1. Create an array of numbers and use forEach() to print each element
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => {
    console.log(num);
});


// 2. Use the sort() method to sort an array of strings alphabetically
let fruits = ["cherry", "apple", "banana"];
fruits.sort();
console.log(fruits);


// A. reverse() method to reverse the order of elements
let itemsA = ["apple", "banana", "cherry"];
itemsA.reverse();
console.log(itemsA);


// B. concat() method to combine two arrays into a single array
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combinedArr = arr1.concat(arr2);
console.log(combinedArr);


// C. slice() method to extract a portion of an array
let originalArr = [1, 2, 3, 4, 5, 6];
let slicedArr = originalArr.slice(2, 4); // Extracts elements from index 2 up to 4
console.log(slicedArr);


// D. splice() method to add and remove elements from an array
let numbersD = [1, 2, 3, 4, 5];
numbersD.splice(3, 1); // Removes 1 element at index 3
console.log(numbersD);


// E. indexOf() method to find the index of a specific element
let numbersE = [1, 2, 3, 4, 5];
let indexE = numbersE.indexOf(3);
console.log(indexE);


// F. join() method to convert an array to a string
let numbersF = [1, 2, 3, 4, 5];
let stringF = numbersF.join(",");
console.log(stringF);


// G. split() method to convert a string to an array
let textG = "1,2,3,4,5";
let arrayG = textG.split(",");
console.log(arrayG);


// 7. Use the length property to find the number of elements in an array
let numbers7 = [1, 2, 3, 4, 5];
console.log(numbers7.length);


// 8. Use the for...of loop to iterate through an array
let numbers8 = [1, 2, 3, 4, 5];
for (let num of numbers8) {
    console.log(num);
}


// 9. Use the Array.isArray() method to check if an object is an array
let testArray = [1, 2, 3, 4, 5];
console.log(Array.isArray(testArray));