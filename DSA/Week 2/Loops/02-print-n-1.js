// Todo: Write a program to print all integers from N to 1 in decreasing order.

// When the input is 5, output: 5, 4, 3, 2, 1
// When the input is 4, output:  4, 3, 2, 1

var fs = require("fs");
var input = fs.readFileSync(0, "utf-8").trim();
var n = parseInt(input);
var result = "";

for (var i = n; i >= 1; i--) {
  result += i;

  if (i !== 1) {
    result += " ";
  }
}

console.log(result);
