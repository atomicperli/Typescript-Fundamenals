

// What is a Class ? --> Class is a blueprint using which we can build multiple things.

// What is an Object? --> Object is an instance of a class 

// What is a constructor ? --> Constructor is used to instantiate an object with default values


// OOPS

// 1. Encapsulation - Accessing something that is only accessible for that class using a public function in that class is called encapsulation
// 2. Abstraction
// 3. Inheritance
// 4. Polymorphism

export{}

class Person {

    protected name: string
    public age: number

    constructor(name: string, age:number) {
        this.name = name;
        this.age = age;
        this.greet(this.name, this.age);
    }

    private greet(name: string, age:number) {
        console.log(`My name is ${name} and my age is ${age}`)
    }

    public setName(name: string, middleName?: string) {
        this.name = name
    }

    public getName(): string {
        return this.name
    }

}

let person: Person = new Person("Yash", 31)
// person.setName("Babu")
// console.log(person.getName())
// person.greet2()
// public, private, protected (Inheritance)


