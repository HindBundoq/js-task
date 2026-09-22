function printStarPattern() {
  for (let i = 2; i <= 5; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row += "*";
    }
    document.write(row + "<br>");
  }
}

// استدعاء الدالة لتنفيذ الطباعة على الشاشة البيضاء
printStarPattern();