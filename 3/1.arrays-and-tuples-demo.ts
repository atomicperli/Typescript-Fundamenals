// arrays-and-tuples-demo.ts

// Array
let fruits: string[] = ["Apple", "Banana", "Mango"];

console.log("Fruits:", fruits); 
console.log("Third fruit:", fruits[2]);

let subjects: string[] = [];
subjects[0] = "Social";
subjects[1] = "Maths";
subjects[2] = "Chemistry"

console.log(subjects)

let marks: number[] = [20,50,80,100]
console.log(marks)

let anyArray = ["ABCD", 1, 2, true]
console.log(anyArray)



//Tuple
let person: [string, number] = ["Alice", 25];
console.log("Tuple:", person);
console.log("Name:", person[0]);
console.log("Age:", person[1]);

let coordinates: [number, number] = [125.01994, 180.1890]
console.log("The Lattitude is", coordinates[0])
console.log("The Logitude is", coordinates[1])

