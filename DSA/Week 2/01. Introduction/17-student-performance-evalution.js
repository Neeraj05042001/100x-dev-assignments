// Todo: You are given the marks obtained by a student. Based on the marks, display an appropriate performance message according to the following rules:

// If marks are greater than 90, print Excellent
// Else if marks are greater than 80 and less than or equal to 90, print Good
// Else if marks are greater than 70 and less than or equal to 80, print Fair
// Else if marks are greater than 60 and less than or equal to 70 , print Meets Expectations
// Else (marks less than or equal to 60), print Below Par

var fs = require("fs");
var input = fs.readFileSync(0, "utf-8").trim();

var marks = parseInt(input);

if (marks > 90 && marks <= 100) {
  console.log("Excellent");
} else if (marks > 80 && marks <= 90) {
  console.log("Good");
} else if (marks > 70 && marks <= 80) {
  console.log("Fair");
} else if (marks > 60 && marks <= 70) {
  console.log("Meets Expectations");
} else if (marks <= 60) {
  console.log("Below Par");
}
