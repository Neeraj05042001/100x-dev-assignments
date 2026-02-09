/*
  Write a function `compressWords` which takes an array of strings as input and returns a new array with consecutive duplicate elements compressed. If an element appears consecutively, it is replaced by the element followed by the count of its occurrences.

  Example:
  - Input: ["apple", "apple", "banana", "banana", "banana", "cherry", "apple", "apple"]
  - Output: ["apple2", "banana3", "cherry", "apple2"]

  - Input: ["cat", "dog", "dog", "dog", "cat"]
  - Output: ["cat", "dog3", "cat"]

  - Input: ["one", "two", "three"]
  - Output: ["one", "two", "three"]

  - Input: []
  - Output: []

  Note:
  - The function should handle empty arrays and arrays with no consecutive duplicates.

  Once you've implemented the logic, test your code by running
  - `npm run test-compressWord`
*/
const arr = [
  "apple",
  "apple",
  "banana",
  "banana",
  "banana",
  "cherry",
  "apple",
  "apple",
];
function compressWords(arr) {
  const compressed = [];

  arr.forEach((element, index) => {
    let count = 1;
    if (arr[index + 1] === element && arr[index - 1] === element) {
      count = count + 1;
      compressed.push(element + count);
    } 
  });
  return compressed;
}
const result = compressWords(arr);
console.log(result);
module.exports = compressWords;
