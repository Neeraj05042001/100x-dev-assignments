// Todo: You are given the marks obtained by a student.Your task is to check whether the student has passed or failed.
// A student is considered to have passed if the marks obtained are at least 35.

var fs = require("fs");
var input = fs.readFileSync(0, "utf-8").trim();

var n = parseInt(input);

if (n >= 35 && n <= 100) {
  console.log("Pass");
} else {
  console.log("Fail");
}
