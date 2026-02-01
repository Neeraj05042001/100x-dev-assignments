// Todo: You are given an integer N followed by N integers. Count how many of the given numbers are:

// Positive
// Negative
// Even
// Odd

// Input:
// 5
// -2 0 3 7 -5

// output:
// 2
// 2
// 2
// 3

var fs = require("fs");
var input = fs.readFileSync(0, "utf-8").trim();
var data = input.split(/\s+/).map(Number);
var N = data[0];
var m = data.slice(1, N + 1);


var PositiveInteger = 0;
var negativeInteger = 0;
var evenIntegers = 0;
var oddInteger = 0;

for (var i = 0; i < m.length; i++) {
  if (m[i] > 0) {
    PositiveInteger++;
  } else if (m[i] < 0) {
    negativeInteger++;
  }

  if (m[i] % 2 === 0) {
    evenIntegers++;
  } else {
    oddInteger++;
  }
}
console.log(PositiveInteger);
console.log(negativeInteger);
console.log(evenIntegers);
console.log(oddInteger);

