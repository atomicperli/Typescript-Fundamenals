class Human {
    name: string;
    age: number;

    // Overload Signatures
    constructor();
    constructor(name: string);
    constructor(name: string, age: number);

    // Single Implementation
    constructor(name?: string, age?: number) {
        // if( name ) {
        //     this.name  = name
        // } else {
        //     this.name = "Unknown"
        // }

        // if( age ) {
        //     this.age  = age
        // } else {
        //     this.age = 0
        // }

        this.name = name ?? "Unknown";
        this.age = age ?? 0; // Default age is 0 if not provided
    }

    print(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

let human = new Human("Babu", 25);
human.print()