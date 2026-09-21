// Find the output for these expressions and justify the output according to JavaScript interpretation:
// ● typeof(100)
// ● typeof(73.9)
// ● typeof(NaN)
// ● typeof("Water")
// ● typeof(false)
// ● typeof(9 != 11)
// ● "Orang" + "e"
// ● "Orange" - "s"
// ● "4" + "8"
// ● "4" - "8"
// ● "name" + 3
// ● "name" - 3
// ● 82 * "word"
// ● 1 + "hello"
// ● "hello" + 1
// ● 1 + true
// ● "hello" + true
// ● typeof (Infinity)
// ● 1 == '1'
// ● 1 === '1'


console.log(typeof(100)); // number
console.log(typeof(73.9)); // number
console.log(typeof(NaN)); // number
console.log(typeof("Water")); // string
console.log(typeof(false)); // boolean
console.log(typeof(9 != 11)); // boolean
console.log(typeof("Orang" + "e")); // string
console.log(typeof("Orange" - "s")); // number (NaN, because subtraction is not defined for strings)
console.log(typeof("4" + "8")); // string
console.log(typeof("4" - "8")); // number (NaN, because subtraction is not defined for strings)
console.log(typeof("name" + 3)); // string      
console.log(typeof("name" - 3)); // number (NaN, because subtraction is not defined for strings)
console.log(typeof(82 * "word")); // number (NaN, because multiplication is not defined for strings)
console.log(typeof(1 + "hello")); // string
console.log(typeof("hello" + 1)); // string
console.log(typeof(1 + true)); // number (true is coerced to 1, so 1 + 1 = 2)
console.log(typeof("hello" + true)); // string
console.log(typeof (Infinity)); // number
console.log(typeof(1 == '1')); // boolean (loose equality, '1' is coerced to number 1)
console.log(typeof(1 === '1')); // boolean (strict equality, no type coercion, so false)        
