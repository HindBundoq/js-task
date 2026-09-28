// --- Exercise 4: Student Records Manager Solution ---

// Array of student objects
let students = [
    { id: 1, name: "Alice", grade: 85 },
    { id: 2, name: "Bob", grade: 92 },
    { id: 3, name: "Charlie", grade: 78 }
];

// 1. Use splice() to add, remove, and replace students
// Removing 0 items at index 1 and adding a new student:
students.splice(1, 0, { id: 4, name: "Diana", grade: 95 });

// 2. Use slice() to create a copy of a portion of the array
let topStudents = students.slice(0, 2);

// 3. Sort students by grade (ascending order)
students.sort(function(a, b) {
    return a.grade - b.grade;
});

// 4. Print the final list using forEach()
students.forEach(function(student) {
    console.log(student.name + " - Grade: " + student.grade);
});