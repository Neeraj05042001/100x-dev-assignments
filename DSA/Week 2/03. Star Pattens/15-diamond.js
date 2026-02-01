// Todo:Write a program to print the following diamond pattern

// when input is 3, the output is as below:
 
//                       * 
//                      * * 
//                     * * * 
//                      * * 
//                       * 

// when input is 5, the output is as below:

//                          * 
//                         * * 
//                        * * * 
//                       * * * * 
//                      * * * * * 
//                       * * * * 
//                        * * * 
//                         * * 
//                          * 


var fs = require("fs");
var input = fs.readFileSync(0, "utf-8").trim();
var n = parseInt(input);

for (var i = 1; i <= 2 * n - 1; i++) {
  var row = "";
  if (i <= (2 * n) / 2) {
    //   blank space from left side
    for (j = 1; j <= n - i; j++) {
      row = row + " ";
    }

    //   stars after every blank completes
    for (var k = 1; k <= i; k++) {
      row = row + "*" + " ";
    }
  } else {
    // For lower inverted triangle
    // increasing blank space
    for (var p = 1; p <= i - n; p++) {
      row = row + " ";
    }
    // printing star after blank
    for (var q = 1; q <= 2 * n - i; q++) {
      row = row + "*" + " ";
    }
  }
  console.log(row);
}
