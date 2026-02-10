/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

const str1 = "debit card";
const str2 = "bad credit";
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  function sortString(str) {
    return str.toLowerCase().split("").sort().join("");
  }

  return sortString(str1) === sortString(str2);
}

const result = isAnagram(str1, str2);
console.log(result);

module.exports = isAnagram;
