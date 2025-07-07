"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
exports.complex = complex;
function complex() {
    return "complex";
}
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.printPersonDetails = function () {
        console.log("Name is ".concat(this.name, " and age is ").concat(this.age));
    };
    return Person;
}());
exports.Person = Person;
function test() {
    return "test";
}
exports.default = test;
