/*
  Write a function `getPrimesUpTo100` which returns an array of all prime numbers up to 100.

  What is a prime number?
  - A prime number is a number greater than 1 that has no divisors other than 1 and itself.

  Example:
  - Output: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

  - Input: There is no input, the function returns an array of primes.

  - Input: N/A

  Once you've implemented the logic, test your code by running
  - `npm run test-prime`
*/

function getPrimesUpTo100() {
  let prime = [];
  for (let i = 1; i <= 100; i++) {
    let factor = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        factor = factor + 1;
      }
    }
    if (factor === 2) {
      prime.push(i);
    }
  }
  return prime
}
const result = getPrimesUpTo100()
console.log(result)
module.exports = { getPrimesUpTo100 };
