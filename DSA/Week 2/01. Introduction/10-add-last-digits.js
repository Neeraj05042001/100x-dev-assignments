// Todo: You are given two integers N and M. Your task is to find the sum of the last digits of N and M.

// Input: 169 125
// Output: 14

var fs = require("fs");
var input = fs.readFileSync(0, "utf-8").trim();

var [n, m] = input.split(/\s/).map((x) => Number(x));

var lastDigit1 = 0;
var lastDigit2 = 0;
for (var i = 1; i <= n.toString().length; i++) {
  lastDigit1 = n % 10;
}

for (var j = 1; j <= m.toString().length; j++) {
  lastDigit2 = m % 10;
}

console.log(lastDigit1 + lastDigit2);
