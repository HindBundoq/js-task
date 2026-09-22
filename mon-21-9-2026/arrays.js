let arr = ["Coding", "Academy", "By", "Orange"];

let arr1 = [...arr, "Jordan"];
let arr2 = arr.slice(0, 2);
let arr3 = ["Welcome", "To", ...arr];
let arr4 = arr.slice(1);
let arr5 = arr.join(" ");
let arr6 = [...arr];
let arr7 = [arr[0], arr[3]];

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop();
fruit.shift();

let orangeIndex = fruit.indexOf("orange");
fruit.push(orangeIndex);

let vegLength = vegetables.length;
vegetables.push(vegLength);

let food = fruit.concat(vegetables);
food.splice(4, 2);
food.reverse();

let foodString = food.join(",");