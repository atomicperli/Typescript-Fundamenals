export{}

// Callback Function  - Is a function that is sent as a parameter to another function which will get executed in that function

// Example with no parameters in callBack

function sayGoodBye(): void {
    console.log('Good Bye')
}

function greet(name: string, callback: () => void ) {
    console.log("Hi ", name)
    callback()
}

//greet("Yash", () => {console.log("Bye Bye")})

// ------------------------------------------------------



// Example with parameters in callback

function printResult(result: number): number {
    //console.log("Result is :", result)
    return result;
}

function compute(a: number, b: number, callback: (result: number) => number){
    let result = a + b;
    let resultOfCallBackFunction = callback(result)
    console.log(resultOfCallBackFunction)
}


compute(10,20, printResult)
