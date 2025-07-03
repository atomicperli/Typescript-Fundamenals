// What is polymorphism - the condition of occurring in several different forms.
// 1. Method overloading
// 2. Method overriding


class NewPerson {

    protected name: string

    constructor(name: string) {
        this.name = name
    }

    greet(): void {
        console.log(`Hello from ${this.name}`);s
    }

    greet1(): void {
        console.log(`Hello Helloo from ${this.name}`);s
    }

    getName() : void {

    }

}

class NewStudent extends NewPerson {

    rollNo: number

    constructor(name: string, rollNo: number) {

        super(name); // calling parent constructor
        this.name = "Babu"
        this.rollNo = rollNo
        super.greet1();
    }

    getName(): string {
        return this.name
    }

    greet(): void {
        console.log(`My roll number is ${this.rollNo}`);
    }

}


// private or protected(inside sub class also ) they can be accessed only inside classes

const s: NewPerson = new NewStudent("Yash", 10);
console.log(s.getName())
s.greet()
