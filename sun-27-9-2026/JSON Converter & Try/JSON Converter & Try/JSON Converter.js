// --- Exercise 5: JSON Converter Solution ---

// Create a JavaScript object representing a product
let product = {
    id: 101,
    name: "Laptop",
    price: 750,
    category: "Electronics",
    available: true
};

// 1. Convert object to JSON string using JSON.stringify()
let jsonString = JSON.stringify(product);
console.log("JSON String:", jsonString);

// 2. Convert JSON string back into a JavaScript object using JSON.parse()
let parsedObject = JSON.parse(jsonString);
console.log("Parsed Object:", parsedObject);

// 3. Handle invalid JSON using try...catch
try {
    let invalidJson = "{ invalid json string }";
    let result = JSON.parse(invalidJson);
} catch (error) {
    console.log("Caught an error while parsing invalid JSON:", error.message);
}