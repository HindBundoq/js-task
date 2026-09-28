// --- Exercise 8: Destructuring & Default Parameters Solution ---

// 1. Object with user profile
let userProfile = {
    name: "Alex",
    email: "alex@example.com",
    age: 26,
    address: "Amman, Jordan"
};

// Extract values and rename 'name' to 'userName'
let { name: userName, email } = userProfile;
console.log(userName, email);

// 2. Array destructuring from skills
let skills = ["JavaScript", "HTML", "CSS", "React"];
let [primarySkill, secondarySkill] = skills;
console.log(primarySkill, secondarySkill);

// 3. createUser function with default parameters
function createUser(username = "Guest", role = "User") {
    return { username, role };
}

console.log(createUser()); // Uses defaults: { username: 'Guest', role: 'User' }
console.log(createUser("Rania", "Admin")); // Overrides defaults