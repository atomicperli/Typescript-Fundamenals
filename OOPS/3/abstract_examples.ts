// =====================
// ABSTRACT CLASSES (Abstraction - Hiding the implentation from others)
// =====================

export{}

abstract class Animal {
    name: string
    constructor(name: string) {
        this.name = name;
    }

    abstract makeSound(): void;

    move(): void {
        console.log(`${this.name} is moving.`);
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Woof!");
    }
}

const dog = new Dog("Bruno");
dog.move();
dog.makeSound();

abstract class Employee {
    empId: number
    empName: string
    constructor(empId: number,  empName: string) {
        this.empId = empId
        this.empName = empName
    }

    abstract calculateSalary(): number;

    display(): void {
        console.log(`ID: ${this.empId}, Name: ${this.empName}`);
    }
}

class FullTimeEmployee extends Employee {
    //private annualSalary: number
    constructor(empId: number, empName: string, private annualSalary: number) {
        super(empId, empName);
        //this.annualSalary = annualSalary
        
    }

    calculateSalary(): number {
        return this.annualSalary / 12;
    }

    getAnnualSalary():number {
        return this.annualSalary
    }

    setAnnualSalary(saalry: number): void {
        this.annualSalary = saalry
    }
}

const emp = new FullTimeEmployee(101, "RK", 600000);
emp.display();
console.log(emp.getAnnualSalary())
console.log("Monthly Salary:", emp.calculateSalary());
