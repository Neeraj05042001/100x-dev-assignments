// Todo:Write a program to print the following binary-pyramid pattern

// when input is 6, the output is as below:

//                 0
//                 10
//                 010
//                 1010
//                 01010
//                 101010

// when input is 2, the output is as below:

//                 0
//                 10

var fs = require("fs");
var input = fs.readFileSync(0, "utf8").trim();
var n = parseInt(input);

function binaryPyramid(n) {
  for (var i = 0; i < n; i++) {
    var row = "";
    var toggle = 1;
    if (i % 2 === 0) {
      toggle = 0;
    }
    for (var j = 0; j < i + 1; j++) {
      row = row + toggle;
      if (toggle === 0) {
        toggle = 1;
      } else {
        toggle = 0;
      }
    }
    console.log(row);
  }
}

binaryPyramid(n);
