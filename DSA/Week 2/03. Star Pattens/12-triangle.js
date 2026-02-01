// Todo:Write a program to print the following triangle pattern

// when input is 5, the output is as below:

//                            *
//                           * *
//                          * * *
//                         * * * *
//                        * * * * *

// when input is 3, the output is as below:
//                          *
//                         * *
//                        * * *




var fs = require("fs");
var input = fs.readFileSync(0, "utf-8").trim();
var n = parseInt(input);



function triangle(a) {
  for (var i = 1; i <= a; i++) {
    var row = "";
    for (var j = 1; j <= a - i; j++) {
      row = row + " ";
    }
    for (var k = 1; k <= i; k++) {
      row = row + "* ";
    }
    console.log(row);
  }
}
triangle(n);
