// --- Exercise 6: Product Inventory Analyzer Solution ---

let inventoryA = [
    { id: 1, name: "Phone", price: 500, category: "Electronics", quantity: 10 },
    { id: 2, name: "Desk", price: 150, category: "Furniture", quantity: 5 },
    { id: 3, name: "Pen", price: 2, category: "Stationery", quantity: 100 }
];

let inventoryB = [
    { id: 4, name: "Notebook", price: 5, category: "Stationery", quantity: 50 }
];

// 1. Use concat() to merge two inventories
let fullInventory = inventoryA.concat(inventoryB);

// 2. Use sort() to order products by price (lowest to highest)
fullInventory.sort(function(a, b) {
    return a.price - b.price;
});

// 3. Use includes() to check a list of available product categories
let categories = ["Electronics", "Furniture", "Stationery"];
let hasFurniture = categories.includes("Furniture");
console.log("Categories includes Furniture:", hasFurniture);

// 4. Use splice() to remove a discontinued product (e.g., remove index 0)
fullInventory.splice(0, 1);

// 5. Use slice() to display the first five products (or available ones)
let topProducts = fullInventory.slice(0, 5);
console.log("Top Products:", topProducts);