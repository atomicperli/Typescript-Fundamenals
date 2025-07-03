// What is polymorphism - the condition of occurring in several different forms.
// 1. Method overloading
// 2. Method overriding


class methodOL {

     // Implementation of single argument different type
    greet(name: string): string;
    greet(times: number): string;


    greet(arg: any): string {
        if (typeof arg === "string") {
            return `Hello, ${arg}!`;
        } else if (typeof arg === "number") {
            let newString: string = ""
            for(let i = 0; i < arg; i++) {
                newString = newString + " " + "Hello!" ;
            }
            return newString
        }
        return "Hello!";
    }


    // Implementation with Different argument counts
    log(message: string): void;
    log(message: string, level: string): void;

    log(message: string, level?: string): void {
        let lvl = ""
        if(level) {
            lvl = level
        } else {
            lvl = "INFO"
        }
        //const lvl = level ?? "INFO";
        console.log(`[${lvl}] ${message}`);
    }

    
    // Implementation with multiple arguments and different data types
    add(a: number, b:number): number;
    add(a: string, b: string): string;

    add(a: any, b:any) {
        if(typeof a === "string" && typeof b === "string" ) {
            console.log("returning string addition");
            return a + b
        } else if (typeof a === "number" && typeof b === "number" ) {
            console.log("returning number addition");
            return a+b;
        }
    }


}

let mol = new methodOL();
console.log(mol.add(1, 2))