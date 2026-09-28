// --- Exercise 3: Array Methods Playground Solution ---

// Creating an array of student names (simplified to a few for demonstration)
let studentsGroupA = ["Ali", "Sara", "Omar", "Laila", "Zaid"];
let studentsGroupB = ["Mona", "Hamza", "Tariq", "Noor", "Rami"];

// 1. Use concat() to combine two student arrays
let allStudents = studentsGroupA.concat(studentsGroupB);

// 2. Use sort() to sort the names alphabetically
allStudents.sort();

// 3. Use reverse() to reverse the order
allStudents.reverse();

// 4. Use includes() to check whether a particular student exists
let hasAli = allStudents.includes("Ali");
console.log("Includes Ali:", hasAli);

// 5. Use forEach() to print every student with their index
allStudents.forEach(function(student, index) {
    console.log(index + ": " + student);
});