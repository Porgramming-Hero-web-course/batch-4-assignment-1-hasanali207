"use strict";
// Problem NO: 3
// Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.
const countWordOccurrences = (sentence, word) => {
    const words = sentence.toLowerCase().split(" ");
    const Totalword = words.filter(item => item === word.toLowerCase()).length;
    return Totalword;
};
console.log(countWordOccurrences("I love typescript", "typescript"));
