

// Example 1: Asserting a type from 'any'
let someValue: any = "Hello TypeScript";

// Using 'as' keyword (preferred in most modern TS code)

let length2: number = (someValue as number);
console.log("Length using 'as':", length2);


// -----------------------------
// 2. Type Guards
// -----------------------------

// Example 1: typeof
let id: any = null

  if (typeof id === "string") {
    console.log("Test case is failed");
  } else  if(typeof id === "number"){
    console.log("Test case is Passed");
  }

