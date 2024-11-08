// Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

function sumoOfArray(arr: number[]): number {
  let sum: number = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

const sumArray: number[] = [1, 2, 3, 4];

console.log(sumoOfArray(sumArray));
