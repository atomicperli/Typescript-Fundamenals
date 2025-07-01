// conditional-statements-demo.ts

export{}

console.log("Vankay")
// -----------------------------
// 1. if Statement
// -----------------------------
let age: number = 17;

console.log("1. if Statement:");

if (age >= 18) {
  console.log("You are eligible to vote.");
}
console.log("-----------------------------\n");

// -----------------------------
// 2. if...else Statement
// -----------------------------
let isRaining: boolean = false;

console.log("2. if...else Statement:");
if (isRaining) {
  console.log("Take an umbrella.");
} else {
  console.log("Wear sunglasses.");
}


console.log("-----------------------------\n");

// -----------------------------
// 3. if...else  Statement
// -----------------------------
let marks: number = 65;

console.log("3. if...else  Statement:");
if (marks >= 90) {
  console.log("Grade: A+");
} else if (marks >= 75) {
  console.log("Grade: A");
} else if (marks >= 60) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}
console.log("-----------------------------\n");

// -----------------------------
// 4. switch Statement
// -----------------------------
let day: string = "Wednesday";

console.log("4. switch Statement:");
switch (day) {
  case "Monday":
    console.log("Start of the week.");
    break;
  case "Wednesday":
    console.log("Midweek break!");
    break;
  case "Friday":
    console.log("Almost weekend!");
    break;
  default:
    console.log("Just another day.");
}

console.log("-----------------------------\n");

// -----------------------------
// 5. Ternary Operator (Shorthand for if...else)
// -----------------------------
let isLoggedIn: boolean = false;
let message1: string;

if(isLoggedIn) {
  message1 = "Welcome Back"
} else {
  message1 = "Please Login"
}
console.log(message1)

console.log("5. Ternary Operator:");

let message: string = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(message);