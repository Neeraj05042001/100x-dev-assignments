// Todo:Write a program to print the following holllow-square pattern

// when input is 6, the output is as below:

//                        ******
//                        *    *
//                        *    *
//                        *    *
//                        *    *
//                        ******

// when input is 2, the output is as below:
//                        **
//                        **
// when input is 8, the output is as below:

//                        ********
//                        *      *
//                        *      *
//                        *      *
//                        *      *
//                        *      *
//                        *      *
//                        ********





var fs = require("fs");
var input = fs.readFileSync(0, "utf8").trim();
var n = parseInt(input);

function hollowSquare(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (j = 0; j < n; j++) {
      if (i === 0 || i === n - 1) {
        row = row + "*";
      } else {
        if (j === 0 || j === n - 1) {
          row = row + "*";
        } else {
          row = row + " ";
        }
      }
    }
    console.log(row);
  }
}
hollowSquare(n);
