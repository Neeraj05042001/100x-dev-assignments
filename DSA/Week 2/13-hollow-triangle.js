// Todo:Write a program to print the following hollow-triangle pattern

// when input is 6, the output is as below:
//                         *
//                        * *
//                       *   *
//                      *     *
//                     *       *
//                    * * * * * *

// when input is 4, the output is as below:

//                          *
//                         * *
//                        *   *
//                       * * * *

var fs = require("fs");
var input = fs.readFileSync(0, "utf-8").trim();
var n = parseInt(input);

for (let i = 1; i <= n; i++) {
  var row = "";
  for (j = 1; j <= n - i; j++) {
    row = row + " ";
  }
  if (i === 1 || i === n) {
    for (var k = 1; k <= i; k++) {
      row = row + "*" + " ";
    }
  } else {
    row = row + "*";
    for (var k = 1; k <= 2 * i - 3; k++) {
      row = row + " ";
    }
    row = row + "*";
  }

  console.log(row);
}
