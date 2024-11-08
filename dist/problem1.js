"use strict";
// Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.
{
    function sumoOfArray(array) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum;
    }
    const arr = [1, 2, 3, 4, 5];
}
