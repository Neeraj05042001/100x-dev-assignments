// Todo: You are given two integers A and B. Your task is to find the minimum and maximum among them.

// Input: 12 9
// Output:
// Min = 9
// Max = 12

var fs = require("fs");
var input = fs.readFileSync(0, "utf-8").trim();

var [a, b] = input.split(/\s/).map((x) => Number(x));

var min;
var max;
if (a > b) {
  min = b;
  max = a;
} else {
  min = a;
  max = b;
}
console.log(`Min = ${min}`);
console.log(`Max = ${max}`);
