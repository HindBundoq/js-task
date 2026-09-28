// --- Exercise 9: Spread, Rest, Map & Set Solution ---

// 1. Spread operator to combine arrays
let group1 = [101, 102];
let group2 = [103, 104, 101]; // Contains duplicate 101
let combinedGroup = [...group1, ...group2];

// 2. Use Set to remove duplicate student IDs
let uniqueIds = new Set(combinedGroup);
console.log("Unique IDs (Set):", uniqueIds);

// 3. Rest parameter to calculate average grade
function calculateAverage(...grades) {
    if (grades.length === 0) return 0;
    let sum = grades.reduce((acc, val) => acc + val, 0);
    return sum / grades.length;
}
console.log("Average Grade:", calculateAverage(90, 80, 85));

// 4. Use Map to associate student IDs with their grades
let studentMap = new Map();
studentMap.set(101, 95);
studentMap.set(102, 88);

// Update and retrieve
studentMap.set(101, 98); // Update
console.log("Grade for 101:", studentMap.get(101));

// Delete entry
studentMap.delete(102);

// Convert Map back to a regular array
let mapArray = Array.from(studentMap);
console.log("Map as Array:", mapArray);