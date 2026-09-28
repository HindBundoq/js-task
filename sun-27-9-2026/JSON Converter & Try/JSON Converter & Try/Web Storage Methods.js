// --- Exercise 13: Web Storage Methods Solution ---

// 1. Save data using setItem()
localStorage.setItem("username", "SpaceExplorer");
localStorage.setItem("theme", "dark");

// 2. Retrieve data using getItem()
let storedUser = localStorage.getItem("username");
console.log("Retrieved User:", storedUser);

// 3. Retrieve stored key using key(index)
let firstKey = localStorage.key(0);
console.log("First Storage Key:", firstKey);

// 4. Display number of stored items using length
console.log("Storage Items Count:", localStorage.length);

// 5. Delete a specific item using removeItem()
localStorage.removeItem("theme");

// 6. Clear all items for current origin (uncomment if needed)
// localStorage.clear();