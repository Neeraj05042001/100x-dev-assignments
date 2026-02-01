// Todo: You are given two integers A and B. Your task is to find the minimum and maximum among them.

// Input: 12 9 15
// Output:
// Min = 9
// Max = 15

var fs = require("fs");
var input = fs.readFileSync(0, "utf-8").trim();

var [a, b, c] = input.split(/\s+/).map((x) => Number(x));

var min = Math.min(a, b, c);
var max = Math.max(a, b, c);

console.log(`Min = ${min}`);
console.log(`Max = ${max}`);
