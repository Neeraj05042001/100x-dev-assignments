// Todo:Write a program to print the following inverse-pyramid pattern

// when input is 3, the output is as below:
//                    ***
//                    **
//                    *

// when input is 5, the output is as below:
//                    *****
//                    ****
//                    ***
//                    **
//                    *

var fs = require("fs");
var input = fs.readFileSync(0, "utf8").trim();

var n = parseInt(input);

function inversePyramid(n) {
  for (var i = 0; i < n; i++) {
    var row = "";
    for (j = 0; j < n - i; j++) {
      row = row + "*";
    }
    console.log(row);
  }
}
inversePyramid(n);
