function task1() {
  for (let i = 2; i <= 50; i += 2) console.log(i);
  let count = 2;
  while (count <= 50) {
    console.log(count);
    count += 2;
  }
}

function task2() {
  for (let i = 2; i <= 100; i += 2) {
    console.log(i > 50 ? i - 50 : i);
  }
}

function task3() {
  for (let i = 2; i <= 50; i += 2) console.log(i);
  for (let i = 1; i <= 50; i += 2) console.log(i);
}

function task4() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
  }
}

function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) return "FizzBuzz";
  if (num % 3 === 0) return "Fizz";
  if (num % 5 === 0) return "Buzz";
  return num;
}

function recursiveFizzBuzz(current, max) {
  if (current > max) return;
  console.log(fizzBuzz(current));
  recursiveFizzBuzz(current + 1, max);
}

function convertToBanknotes(amount, notes) {
  let result = [];
  for (let note of notes) {
    while (amount >= note) {
      result.push(note);
      amount -= note;
    }
  }
  return result;
}

function countChar(text, char) {
  let count = 0;
  let lowerText = text.toLowerCase();
  let lowerChar = char.toLowerCase();
  for (let i = 0; i < lowerText.length; i++) {
    if (lowerText[i] === lowerChar) count++;
  }
  return count;
}

function task9() {
  for (let i = 0; i <= 20; i++) console.log(i);
  for (let i = 3; i <= 29; i += 2) console.log(i);
  for (let i = 12; i >= -14; i -= 2) console.log(i);
  for (let i = 50; i >= 20; i--) {
    if (i % 3 === 0) console.log(i);
  }
}

function task10() {
  let strVar = 'CodingAcademy';
  let arrVar = [7, 500, 'KH404', 'black', 36];
  for (let i = 0; i < arrVar.length; i++) console.log(arrVar[i]);
  for (let i = strVar.length - 1; i >= 0; i--) console.log(strVar[i]);
}

function task11() {
  let numbers = [7, 23, 18, 9, 13, 38, 10, 12, 0, 124];
  let evens = [];
  let odds = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) evens.push(numbers[i]);
    else odds.push(numbers[i]);
  }
}

function generateMeals(count) {
  let proteins = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
  let grains = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
  let vegetables = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];
  let beverages = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
  let desserts = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];

  let meals = [];
  for (let i = 0; i < count; i++) {
    let meal = [
      proteins[i % proteins.length],
      grains[i % grains.length],
      vegetables[i % vegetables.length],
      beverages[i % beverages.length],
      desserts[i % desserts.length]
    ];
    meals.push(meal);
  }
  return meals;
}