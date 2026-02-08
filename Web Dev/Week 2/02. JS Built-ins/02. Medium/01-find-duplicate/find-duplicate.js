/*
  Write a function `findDuplicates` which takes an array as input and returns an array containing all the duplicate elements.

  What are duplicates?
  - Elements that appear more than once in the array are considered duplicates.

  Example:
  - Input: [10, 20, 30, 10, 40]
  - Output: [10]

  - Input: [1, 2, 3, 4, 5]
  - Output: []

  - Input: []
  - Output: []

  Once you've implemented the logic, test your code by running
  - `npm run test-duplicates`
*/
const arr = [10, 20, 30, 10, 40];
function findDuplicates(arr) {
  const seen = new Set();
  const duplicate = new Set();

  for (let element of arr) {
    if (seen.has(element)) {
      duplicate.add(element);
    } else {
      seen.add(element);
    }
  }

  return [...duplicate];
}

const result = findDuplicates(arr);
console.log(result);
module.exports = findDuplicates;
