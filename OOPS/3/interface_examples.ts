// =====================
// 📐 INTERFACES
// =====================

export {}

// class will have the implementation also - The Functions have implementation
// Although Interface is also a blueprint it doesn't have any implementation

interface Product {
    readonly id: number;
    name: string;
    description?: string;
}

let item: Product = {
    id: 101,
    name: "Laptop"
};

let item2: Product = {
    id: 200,
    name: "Iphone"
}

console.log(item.id)
console.log(item2.id)

interface Person {
    name: string;
    age: number;
    greet(): void;
}

const user: Person = {
    name: "Pranav",
    age: 28,
    greet() {
        console.log(`Hi, I'm ${this.name}`);
    }
};

user.greet();



interface Movable {
    move(): void;
}

interface Flyable extends Movable {
    age: number
    fly(): void;
}

interface Roadable {
    goByRoad(): void;
    move(): void;
}

interface Person {
    name: string;
    age: number;
    greet(): void;
}


let user2: Flyable = {
    age: 25,
    move(): void {
        console.log("Moving")
    },

    fly(): void {
        console.log("Flying")
    }
}
user2.move()
user2.fly()

class Drone implements Flyable,Roadable {
    age:number
    constructor(age:number) {
        this.age = age;
    }
    move(): void {
        console.log("Drone is moving on ground.");
    }

    fly(): void {
        console.log("Drone is flying in the sky.");
    }

    goByRoad(): void {
        console.log("Go By Road")
    }
}

abstract class Hero extends Drone implements Flyable {


    fly() {
        console.log("Flying")
    }

    move() {
        console.log("Moving")
    }

    abstract heroName();
}

const myDrone = new Drone(25);
console.log(myDrone.age)
myDrone.move();
myDrone.fly();
myDrone.goByRoad();
