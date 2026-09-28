// --- Exercise 11: Classes & Inheritance Solution ---

// 1. Parent Person Class
class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    getInfo() {
        return `Name: ${this.name}, Email: ${this.email}`;
    }
}

// 2. Student Class extending Person
class Student extends Person {
    constructor(name, email, studentId) {
        super(name, email);
        this.studentId = studentId;
    }

    getInfo() { // Overriding method
        return `Student - ${super.getInfo()}, ID: ${this.studentId}`;
    }
}

// 3. Instructor Class extending Person
class Instructor extends Person {
    constructor(name, email, department) {
        super(name, email);
        this.department = department;
    }

    getInfo() { // Overriding method
        return `Instructor - ${super.getInfo()}, Dept: ${this.department}`;
    }
}

// Demonstrating instances
let studentObj = new Student("Khaled", "khaled@univ.com", "S123");
let instructorObj = new Instructor("Dr. Sami", "sami@univ.com", "Computer Science");

console.log(studentObj.getInfo());
console.log(instructorObj.getInfo());