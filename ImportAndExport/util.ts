function complex() {
    return "complex"
}


class Person {

    name: string
    age: number

    constructor(name:string, age:number) {
        this.name = name
        this.age = age;
    }

    printPersonDetails() {
        console.log(`Name is ${this.name} and age is ${this.age}`)
    }
}

function test() {
    return "test"
}

export {complex, Person}
export default test;