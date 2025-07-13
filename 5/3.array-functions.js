"use strict";
// array-functions-demo.ts
let numbers = [10, 20, 30, 50, 40];
console.log("Original Array:", numbers);
// 1. push() - Add an element at the end
numbers.push(60);
console.log("After push(60):", numbers);
// 2. pop() - Remove the last element
numbers.pop();
console.log("After pop():", numbers);
// 3. unshift() - Add element at the beginning
numbers.unshift(5);
// console.log("After unshift(5):", numbers);
// 4. shift() - Remove the first element
numbers.shift();
console.log("After shift():", numbers);
// 5. indexOf() - Find the index of an element
let index = numbers.indexOf(60);
console.log("Index of 30:", index);
// 6. includes() - Check if an element exists
console.log("Includes 20:", numbers.includes(20));
console.log("Includes 100:", numbers.includes(100));
//  7. slice() - Get a portion of the array
let sliced = numbers.slice(0, 4); // from index 1 to 2
console.log("Slice(1, 3):", sliced);
//8. splice() - Remove or replace elements
numbers.splice(2, 2); // remove 1 element at index 2
console.log("After splice(2, 1):", numbers);
// 9. map() - Transform each element
// let doubledDuplicate: number[] = []
// for(let i = 0; i < numbers.length; i++) {
//     doubledDuplicate.push(numbers[i] * 2)
// }
// console.log(doubledDuplicate)
let doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);
// 10. filter() - Filter elements based on condition
// let doubledDuplicate: number[] = []
// for(let i = 0; i < numbers.length; i++) {
//     if(numbers[i] > 25)
//     doubledDuplicate.push(numbers[i])
// }
// console.log(doubledDuplicate)
// let sortedNumbers = numbers.sort()
// console.log(sortedNumbers)
let filtered = numbers.filter(num => num > 25);
console.log("Filtered (>25):", filtered);
// 11. reduce() - Reduce array to a single value
// let result: number = 0;
// for(let i = 0; i < numbers.length; i++) {
//     result = result + numbers[i];
// }
// console.log(result)
let sum = numbers.reduce((result, current) => result * current, 150);
console.log("Sum using reduce():", sum);
// 12. forEach() - Run a function on each item
console.log("Using forEach:");
numbers.forEach(num => console.log("Item:", num * 2));
