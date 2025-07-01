//Anonymous Functions


let anonymousFunction = function (): void {
    console.log("Hello World")
}

//anonymousFunction()

let anonymousFunctionWithParameters = function(x: number, y:number): number {
    return x+y
}


//console.log(anonymousFunctionWithParameters(20,40))


//Arrow Function

let arrowFunction =  (): void => console.log("Hello World Arrow Function")



//arrowFunction()

let arrowFunctionWithParameters = (x: number, y:number): number =>  x+y


console.log(arrowFunctionWithParameters(10,20));