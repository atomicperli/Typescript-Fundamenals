export function complex() {
    return "Anothercomplex"
}


export class Person {

    name: string
    age: number

    constructor(name:string, age:number) {
        this.name = name
        this.age = age;
    }

    printPersonDetails() {
        console.log(`Another Name is ${this.name} and age is ${this.age}`)
    }
}