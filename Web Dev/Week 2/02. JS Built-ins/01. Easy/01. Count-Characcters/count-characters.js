/*
  Write a function `countCharacters` which takes a string as input and returns an object representing the frequency of each character in the string.

  Example:
  - Input: "hello"
  - Output: { h: 1, e: 1, l: 2, o: 1 }

  - Input: "aabbcc"
  - Output: { a: 2, b: 2, c: 2 }

  - Input: ""
  - Output: {}

  Note:
  - The function should count all characters, including spaces and special characters.
  - The function should handle empty strings gracefully.


*/

/*
  Write a function `countCharacters` which takes a string as input and returns an object representing the frequency of each character in the string.

  Example:
  - Input: "hello"
  - Output: { h: 1, e: 1, l: 2, o: 1 }

  - Input: "aabbcc"
  - Output: { a: 2, b: 2, c: 2 }

  - Input: ""
  - Output: {}

  Note:
  - The function should count all characters, including spaces and special characters.
  - The function should handle empty strings gracefully.
*/

function countCharacters(input) {
  let output = {};
  let characters = [];

  if (input === "") {
    return output;
  }

  for (let i = 0; i < input.length; i++) {
    if (!characters.includes(input.charAt(i))) {
      characters.push(input.charAt(i));
      output[input.charAt(i)] = 1;
    } else {
      output[input.charAt(i)] = output[input.charAt(i)] + 1;
    }
  }

  return output;
}

module.exports = countCharacters;

// Alternative approach

// function countCharacters(input) {
//   return [...input].reduce((acc, char) => {
//     acc[char] = (acc[char] || 0) + 1;
//     return acc;
//   }, {});
// }
