// exception-handling-examples.ts

// as operator

let nameOfThePerson: unknown = "Yash"
console.log((nameOfThePerson as string).length)

let isMale: unknown = "true"
console.log(isMale as boolean)

let complexReturn: unknown = 5538
console.log((complexReturn as string))

let complexNumber: unknown = "Yash"
console.log(complexNumber as number)


// instanceof

//typeof works on primitive data types like number string boolean etc.
// instanceof works on Compex Types like class, interface

let x: number = 222
class newPerson {

}
console.log(typeof x)
const np = new newPerson()
console.log(np instanceof newPerson)



// How to throw an Error
throw new Error("My File is not workin")

// 1. Basic try-catch-finally
function basicTryCatch() {
    try {
        console.log("Trying risky operation...");
        throw new Error("Something went wrong!");
    } catch (error) {
        console.log("Caught error:", (error as Error).message);
    } finally {
        console.log("This will always run (cleanup logic)");
    }
}

// 2. try-finally (without catch)
function tryFinallyOnly() {
    try {
        console.log("Performing task...");
        // throw new Error("Oops!"); // Uncomment to test error without catch
    } finally {
        console.log("Always executed even if there's an error");
    }
}

// ✅ 3. Function that throws error manually
function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

// ✅ 4. Using custom error class
class ArithmeticError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "ArithmeticError";
    }
}

function safeDivide(a: number, b: number): number {
    if (b === 0) {
        throw new ArithmeticError("Custom: Division by zero is illegal");
    }
    return a / b;
}

// ✅ 5. Type guarding inside catch block
function guardedCatchExample() {
    try {
        throw new Error("Example error");
    } catch (e) {
        if (e instanceof Error) {
            console.log("Guarded catch:", e.message);
        } else {
            console.log("Unknown error type:", e);
        }
    }
}

// ✅ Run all examples
console.log("\n--- 1. Basic try-catch-finally ---");
basicTryCatch();

console.log("\n--- 2. try-finally without catch ---");
tryFinallyOnly();

console.log("\n--- 3. Manual throw example ---");
try {
    const result = divide(10, 0); // Change to 2 to test happy path
    console.log("Result:", result);
} catch (e) {
    console.log("Manual throw caught:", (e as Error).message);
}

console.log("\n--- 4. Custom error class example ---");
try {
    const result = safeDivide(5, 0);
    console.log("Result:", result);
} catch (e) {
    if (e instanceof ArithmeticError) {
        console.log("Caught ArithmeticError:", e.message);
    } else {
        console.log("Caught unknown error:", e);
    }
}

console.log("\n--- 5. Guarded catch example ---");
guardedCatchExample();