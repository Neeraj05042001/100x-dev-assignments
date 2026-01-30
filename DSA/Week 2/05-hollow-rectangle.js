// Todo:Write a program to print the following holllow-rectangle pattern

// when input is 5,5, the output is as below:

//                      *****
//                      *   *
//                      *   *
//                      *   *
//                      *****

// when input is 6, 9, the output is as below:
//                      *********
//                      *       *
//                      *       *
//                      *       *
//                      *       *
//                      *********



var fs = require("fs");
var input = fs.readFileSync(0, "utf8").trim();
var parts = input.split(" ");
var n = parseInt(parts[0]);
var m = parseInt(parts[1]);

function hollowRectangle(n, m) {
  for (var i = 0; i < n; i++) {
    var row = "";
    for (var j = 0; j < m; j++) {
      if (i === 0 || i === n - 1) {
        row = row + "*";
      } else {
        if (j === 0 || j === m - 1) {
          row = row + "*";
        } else {
          row = row + " ";
        }
      }
    }
    console.log(row);
  }
}
hollowRectangle(n, m);
