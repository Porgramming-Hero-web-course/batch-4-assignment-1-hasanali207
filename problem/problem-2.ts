//Problem NO: 2
// Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

const removeDuplicates = (arr: number[]): number[] => {
  const newArray = arr.filter((item, index) => arr.indexOf(item) === index);

  return newArray;
};

// removeDuplicates([1, 2, 2, 3, 4, 4, 5]);

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

//Expected output: [1, 2, 3, 4, 5]
