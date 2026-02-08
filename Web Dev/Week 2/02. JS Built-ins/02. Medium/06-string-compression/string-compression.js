/*
  Write a function `compression` which takes a string as input and returns a compressed version of the string. The compression is done by replacing consecutive repeating characters with the character followed by the count of repetitions. If a character does not repeat, it is not followed by a count.

  Example:
  - Input: "aaabbbbcccvvmm"
  - Output: "a3b4c3v2m2"

  - Input: "abc"
  - Output: "abc"

  - Input: "aabbcc"
  - Output: "a2b2c2"

  - Input: ""
  - Output: ""

  Note:
  - The function should work for any alphanumeric string.

  Once you've implemented the logic, test your code by running
  - `npm run test-compressString`
*/
function compression(str) {
  if (str.length === 0) return "";
  
  let compressed = "";
  let count = 1;
  
  for (let i = 0; i < str.length; i++) {
    // If next character is the same, increment count
    if (i + 1 < str.length && str[i] === str[i + 1]) {
      count++;
    } 
    // Otherwise, add character and count to result
    else {
      compressed += str[i];
      if (count > 1) {
        compressed += count;
      }
      count = 1;  // Reset count
    }
  }
  
  return compressed;
}

module.exports = compression;
