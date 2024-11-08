"use strict";
// Problem 7:
// Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getCarAge(currentYear = new Date().getFullYear()) {
        const NowcarAge = currentYear - this.year;
        return NowcarAge;
    }
}
// Sample Input 1:
const car = new Car("Honda", "Civic", 2018);
console.log(car.getCarAge());
// Sample Output 1:
// 6 (assuming current year is 2024)
