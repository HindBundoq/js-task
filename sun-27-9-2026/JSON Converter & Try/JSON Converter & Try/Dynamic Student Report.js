// --- Exercise 10: Dynamic Student Report Solution ---

let reportStudents = [
    { id: 1, name: "Yousef", grade: 90 },
    { id: 2, name: "Lina", grade: 55 },
    { id: 3, name: "Ahmad", grade: 75 }
];

reportStudents.forEach(student => {
    let status = student.grade >= 60 ? "Pass" : "Fail";
    
    // Multiline template literal report
    let reportText = `
    Student Report:
    - Name: ${student.name}
    - ID: ${student.id}
    - Grade: ${student.grade}
    - Status: ${status}
    -----------------
    `;
    
    console.log(reportText);
});