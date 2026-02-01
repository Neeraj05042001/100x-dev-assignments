// Todo: Write a program to print the butterfly pattern
// input = 6, output is below

//                  *          *
//                  **        **
//                  ***      ***
//                  ****    ****
//                  *****  *****
//                  ************
//                  *****  *****
//                  ****    ****
//                  ***      ***
//                  **        **
//                  *          *

// input=4, output is below

//                   *      *
//                   **    **
//                   ***  ***
//                   ********
//                   ***  ***
//                   **    **
//                   *      *

var fs = require("fs");
var input = fs.readFileSync(0, "utf-8").trim();
var n = parseInt(input);

for (var i = 1; i <= 2 * n - 1; i++) {
  var row = "";
  if (i <= (2 * n) / 2) {
    for (var j = 1; j <= i; j++) {
      row = row + "*";
    }
    for (var k = 1; k <= 2 * n - i * 2; k++) {
      row = row + " ";
    }
    for (var l = 1; l <= i; l++) {
      row = row + "*";
    }
  } else {
    for (var p = 1; p <= 2 * n - i; p++) {
      row = row + "*";
    }
    // blank space
    for (var q = 1; q <= (i - n) * 2; q++) {
      row = row + " ";
    }
    for (var r = 1; r <= 2 * n - i; r++) {
      row = row + "*";
    }
  }
  console.log(row);
}
