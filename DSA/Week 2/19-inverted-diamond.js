// Todo: Write a program to print he inverted diamond pattern

// When input = 5, output as shown below:

//               ***** *****
//               ****   ****
//               ***     ***
//               **       **
//               *         *
//               **       **
//               ***     ***
//               ****   ****
//               ***** *****


// When input is 3, output is as shown below:

//                 *** ***
//                 **   **
//                 *     *
//                 **   **
//                 *** ***


var fs = require("fs");
var input = fs.readFileSync(0, "utf-8").trim();
var n = parseInt(input);



for (var i = 1; i <= 2 * n - 1; i++) {
  var row = "";
  if (i <= (2 * n) / 2) {
    for (var j = 1; j <= n + 1 - i; j++) {
      row = row + "*";
    }
    //   empty space
    for (var j = 1; j <= i * 2 - 1; j++) {
      row = row + " ";
    }
    //   right side triangle
    for (var k = 1; k <= n + 1 - i; k++) {
      row = row + "*";
    }
  } else {
    // lower left triangle
    for (var p = 1; p <= i - n + 1; p++) {
      row = row + "*";
    }
    for (var q = 1; q <= (n * 2 - 1 - i) * 2 + 1; q++) {
      row = row + " ";
    }
    for (var r = 1; r <= i - n + 1; r++) {
      row = row + "*";
    }
  }
  console.log(row);
}
