/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/
const numbers = [3, 7, 2, 9, 1];
function findLargestElement(numbers) {
  let largest = numbers[0];
  numbers.forEach((element) => {
    if (largest < element) {
      largest = element;
    }
  });
  return largest;
}
const result = findLargestElement(numbers);
console.log(result);
module.exports = findLargestElement;
