/*
  Write a function `reverseInteger` which takes an integer as input and returns the integer with its digits reversed. If the input is negative, the reversed integer should also be negative.

  What is reversing an integer?
  - Reversing an integer means rearranging its digits in the opposite order while maintaining its sign.

  Example:
  - Input: 123
  - Output: 321

  - Input: -456
  - Output: -654

  - Input: 100
  - Output: 1

  - Input: 0
  - Output: 0

  Once you've implemented the logic, test your code by running
  - `npm run test-reverseInteger`
*/
const num = 5;
function reverseInteger(num) {
  let lastDigit = 0;
  let copyNum = Math.abs(num);
  let reverse = 0;

  while (copyNum > 0) {
    lastDigit = copyNum % 10;
    reverse = reverse * 10 + lastDigit;
    copyNum = Math.floor(copyNum / 10);
  }

  return num < 0 ? -Math.abs(reverse) : Math.abs(reverse);
}

const result = reverseInteger(num);
console.log(result);

module.exports = reverseInteger;
