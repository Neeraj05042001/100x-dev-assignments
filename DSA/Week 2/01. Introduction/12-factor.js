// Todo: You are given two integers N and F. Your task is to check whether F is a factor of N.

var fs = require("fs");
var input = fs.readFileSync(0, "utf-8").trim();

var [n, f] = input.split(/\s/).map((x) => Number(x));

if (n % f === 0) {
  console.log("Yes");
} else {
  console.log("No");
}
