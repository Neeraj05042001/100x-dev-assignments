// Todo: You are given two integers N and M. Your task is to check whether M is a multiple of N.

// Input: 6 36
// Output: Yes

var fs = require("fs");
var input = fs.readFileSync(0, "utf-8").trim();

var [n, m] = input.split(/\s/).map((x) => Number(x));

if (m % n === 0) {
  console.log("Yes");
} else {
  console.log("No");
}
