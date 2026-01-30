// Todo:Write a program to print the following vertical-triangle pattern

// when input is 4, the output is as below:
//                 * 
//                 * * 
//                 * * * 
//                 * * * * 
//                 * * * 
//                 * * 
//                 * 

// when input is 7, the output is as below:

//                     * 
//                     * * 
//                     * * * 
//                     * * * * 
//                     * * * * * 
//                     * * * * * * 
//                     * * * * * * * 
//                     * * * * * * 
//                     * * * * * 
//                     * * * * 
//                     * * * 
//                     * * 
//                     * 




var fs = require("fs");
var input = fs.readFileSync(0, "utf-8").trim();

var n = parseInt(input);

function verticalTriangle(n) {
  for (var i = 0; i < 2 * n - 1; i++) {
    var row = "";
    if (i < n) {
      for (var j = 0; j < i + 1; j++) {
        row = row + " " + "*";
      }
    } else {
      for (var k = 0; k < 2 * n - 1 - i; k++) {
        row = row + " " + "*";
      }
    }
    console.log(row);
  }
}
verticalTriangle(n);
