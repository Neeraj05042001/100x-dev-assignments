// Todo: You are given an integer N. Your task is to determine whether the number is even or odd.

// Input: 20
// Output: Even
// Input: 3
// Output: odd
var fs = require("fs");
var input = fs.readFileSync(0, "utf-8").trim();

var n = parseInt(input);

if (n % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}
