function checkEligibility(birthYear) {
  let currentYear = new Date().getFullYear();
  let age = currentYear - birthYear;

  if (age > 60) return "You may join the seniors' program.";
  if (age > 30) return "You are not eligible. You may join other programs.";
  if (age >= 18) return "You are eligible. Start your application.";
  return "You may join the kids' program.";
}

function swapCase(text) {
  return text.split("").map(char => {
    return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
  }).join("");
}

function toCamelCase(text) {
  return text.split(" ").map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join("");
}

function removeElement(arr, target) {
  return arr.filter(item => item !== target);
}

function isOddOrEven(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}

function isNumber(val) {
  return typeof val === "number" && !isNaN(val);
}

function findLargest(a, b) {
  return a > b ? a : b;
}

function checkTriangle(a, b, c) {
  if (a === b && b === c) return "Equilateral";
  if (a === b || b === c || a === c) return "Isosceles";
  return "Scalene";
}

function inRange(num, min, max) {
  return num >= min && num <= max;
}

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}