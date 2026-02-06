/*
  Write a function `countOccurrences` which takes an array as input and returns an object representing the frequency of each element in the array.

  What is frequency?
  - The frequency of an element is the number of times it appears in the array.

  Example:
  - Input: [10, 20, 10, 30, 20, 20]
  - Output: { 10: 2, 20: 3, 30: 1 }

  - Input: [1, 2, 3, 1, 2, 1]
  - Output: { 1: 3, 2: 2, 3: 1 }

  - Input: []
  - Output: {}

  Once you've implemented the logic, test your code by running
  - `npm run test-occurrences`
*/
const input = [10, 20, 30, 10, 40];
function countOccurrences(arr) {
  const frequency = {};
  if (arr.length === 0) return frequency;
  for (const element of arr) {
    frequency[element] = (frequency[element] || 0) + 1;
  }
  return frequency;
}
const result = countOccurrences(input);
console.log(result);

module.exports = countOccurrences;
