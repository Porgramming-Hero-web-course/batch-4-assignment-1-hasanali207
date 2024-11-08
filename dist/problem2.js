"use strict";
//Problem NO: 2
// Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.
const removeDuplicates = (arr) => {
    const newArray = arr.filter((item, index) => arr.indexOf(item) === index);
    return newArray;
};
removeDuplicates([1, 2, 2, 3, 4, 4, 5]);

