// synchronous programming - All the code that you write will execute line by line 

// asynchronous programming - The code you write might get executed in any order

// Javascript is used in browsers - So if everyline gets executed after one other, each component of that web page must wait until the other component is actually executed

// All these days the code we wrote was executed sequentially ? How ?

// There are few things which execute synchronously, There are a few things which execute asynchronously

// What we saw until today are the codes or the items that execute synchronously 


// Synchronous code
//console.log("Yash")

// Asynchronous Code
// setTimeout - Sleep in java
// setTimeInterval 
// fetch function - this is used to call an API and get the resppnse

console.log(1)
setTimeout(() => {
    console.log("I have waited for 2 seconds")
}, 2000)
console.log(2)
console.log(3)
setTimeout(() => {
    console.log("I have waited for 2 seconds again")
}, 3000)
