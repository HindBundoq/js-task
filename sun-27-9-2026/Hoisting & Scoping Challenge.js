// --- Exercise 1: Hoisting & Scoping Solution ---

console.log(name); // Output: undefined
var name = "Jone";

function test() {
    var x = 10;
    if (true) {
        var y = 20;
    }
    console.log(y); // Output: 20 (because var is function-scoped, not block-scoped)
}
test();

// Modern ES6 approach using let:
let modernName = "Jone";
function modernTest() {
    let modernX = 10;
    if (true) {
        let modernY = 20; // Block-scoped to this if-block
    }
    // console.log(modernY); // Would throw a ReferenceError here!
}
modernTest();