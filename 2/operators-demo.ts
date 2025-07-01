/**
 * There are 5 types of operators
 * 1. Arithmetic
 * 2. Assignment
 * 3. Comparision
 * 4. Logical
 * 5. Type
 */


// -----------------------------
// 1. Arithmetic Operators
// -----------------------------
export {}
let a: number = 10;
let b: number = 3;

console.log("Arithmetic Operators:");
console.log("a + b =", a + b);  // 13
console.log("a - b =", a - b);  // 7
console.log("a * b =", a * b);  // 30
console.log("a / b =", a / b);  // 3.333...
console.log("a % b =", a % b);  // 1

a++; // a = a + 1;
console.log("a++ =", a);        // 11

b--; // b = b - 1;
console.log("b-- =", b);        // 2

console.log("-----------------------------");

// -----------------------------
// 2. Assignment Operators
// -----------------------------
let x: number = 5;

console.log("Assignment Operators:");
x += 2;  // x = x + 2
console.log("x += 2 =", x);     // 7

x -= 3; // x = x - 3;
console.log("x -= 3 =", x);     // 4

x *= 2; // x = x * 2;
console.log("x *= 2 =", x);     // 8

x /= 4;  // x = x/4
console.log("x /= 4 =", x);     // 2

console.log("----------------------------");

// -----------------------------
// 3. Comparison Operators
// -----------------------------
let p: any = 5;
let q: any = '5'; 

console.log("Comparison Operators:");
console.log("p == q:", p == q);     // true (loose equality)
console.log("p === q:", p === q);   // false (strict equality)
console.log("p != q:", p != q);     // false
console.log("p !== q:", p !== q);   // true
console.log("p > 3:", p > 3);       // true
console.log("p <= 5:", p <= 5);     // true

console.log("----------------------------");


// -----------------------------
// 4. Logical Operators
// -----------------------------
let isStudent: boolean = true;
let hasID: boolean = false;

console.log("Logical Operators:");
console.log("isStudent && hasID:", isStudent && hasID); // false
console.log("isStudent || hasID:", isStudent || hasID); // true
console.log("!isStudent:", !isStudent);                 // false

console.log("-----------------------------");

// -----------------------------
// 5. Type Operators
// -----------------------------
let name = "Riya";
let age = 20;


console.log("Type Operators:");
console.log("typeof name:", typeof name);        // "string"
console.log("typeof age:", typeof age);          // "number"

let shop = `Grocery shop ${age}`
console.log(shop)