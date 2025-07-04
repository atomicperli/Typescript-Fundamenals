// =====================
// STATIC MEMBERS
// =====================

export {}
class Ticket {
    nameOfThePerson: string
    private static count: number;
    constructor(name: string) {
        this.nameOfThePerson = name;
        Ticket.count++;
    }

    static {
        Ticket.count = 0
    }

    static getCount() {
        return Ticket.count
        
    }

    getCount2() {
        return Ticket.count
    }
 }


// Static methods cannot access instance variables
// Non Static methods can access static variables
// Non Static methods can method instance variables - Basic 

console.log("Before Object Creation")
console.log("Ticket Count is ", Ticket.getCount())

let ticket1 = new Ticket("Yash")
console.log("After Creating 1st Ticket", ticket1.getCount2())
let ticket2 = new Ticket ("Dhoni")
console.log("After Creating 2nd Ticket ", ticket2.getCount2())

console.log("After Object Creation ")
console.log("Ticket Count is ", Ticket.getCount())



