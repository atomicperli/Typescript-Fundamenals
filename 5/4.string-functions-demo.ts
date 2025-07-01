// string-functions-demo.ts

let message: string = "  Hello TypeScript! TypeScript ";

console.log("Original:", message); 
//console.log("Length:", message.length); // Prints Length - 20
//console.log("To Upper Case:", message.toUpperCase()); // Converts whole string to Uppercase
//console.log("To Lower Case:", message.toLowerCase());// Converts whole string to Lowercase
//console.log("Trimmed:", message.trim()); // Removes trailing and heading spaces if any
console.log("Includes 'Type':", message.includes("Type")); //Checks if the string contains the value
// console.log("Starts with 'Hello':", message.trim().startsWith("Hello")); // Checks if string starts with the given value
// console.log("Replaced 'TypeScript' with 'World First Word':", message.replace("TypeScript", "World")); // 
// console.log("Replaced 'TypeScript' with 'World Globally':", message.replace(/TypeScript/g, "World")); 
//Replaces the given word with another word
//console.log("Substring (0, 5):", message.substring(0, 5)); // Gets a Part of the string
