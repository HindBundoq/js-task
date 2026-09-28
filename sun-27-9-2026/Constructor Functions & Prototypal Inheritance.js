// --- Exercise 2: Constructor Functions & Inheritance Solution ---

// 1. Person Constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Add greet method to Person prototype
Person.prototype.greet = function() {
    return "Hello, my name is " + this.name;
};

// 2. Employee Constructor
function Employee(name, age, employeeId, position) {
    Person.call(this, name, age); // Inherit properties
    this.employeeId = employeeId;
    this.position = position;
}

// Inherit prototype methods from Person
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Override greet method in Employee prototype
Employee.prototype.greet = function() {
    return "Hello, I am " + this.name + ", and I work as a " + this.position;
};

// 3. Create three employees and demonstrate inheritance
let emp1 = new Employee("Alice", 28, "E001", "Developer");
let emp2 = new Employee("Bob", 35, "E002", "Manager");
let emp3 = new Employee("Charlie", 22, "E003", "Designer");

console.log(emp1.greet()); // Output: Hello, I am Alice, and I work as a Developer
console.log(emp2.greet()); // Output: Hello, I am Bob, and I work as a Manager
console.log(emp3.greet()); // Output: Hello, I am Charlie, and I work as a Designer