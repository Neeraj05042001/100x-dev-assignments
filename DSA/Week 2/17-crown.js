// TODO: write a program to print Crown Pattern

// When input is 7, the output is as shown below
/**
 *          *            *
 *          **          **
 *          ***        ***
 *          ****      ****
 *          *****    *****
 *          ******  ******
 *          **************
 */


// When input is 4, the output is as shown below

//               *      *
//               **    **
//               ***  ***
//               ********

var fs = require("fs");
var input = fs.readFileSync(0, "utf-8").trim();
var n = parseInt(input);

for (var i = 1; i <= n; i++) {
  var row = "";
  //   Priting the left side triangle
  for (var j = 1; j <= i; j++) {
    row = row + "*";
  }
  //   printing blank space that is an inverted triangle
  for (var k = 1; k <= 2 * n - i * 2; k++) {
    row = row + " ";
  }
  //   printing right side triangle
  for (var p = 1; p <= i; p++) {
    row = row + "*";
  }
  console.log(row);
}
