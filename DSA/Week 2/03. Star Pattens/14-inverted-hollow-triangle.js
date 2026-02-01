// TODO: write a function to print the following inverted-hollow triangle pattern

// When input is 7, the output is as below:

/**
 * * * * * * * *
 *  *         *
 *   *       *
 *    *     *
 *     *   *
 *      * *
 *       *
 *
 */
// When input is 3, the output is as below:
//            * * * 
//             * * 
//              * 
var fs = require("fs");
var input = fs.readFileSync(0, "utf-8").trim();
var n = parseInt(input);

for (var i = 1; i <= n; i++) {
  var row = "";
  for (var j = 0; j < i - 1; j++) {
    row = row + " ";
  }

  if (i === 1 || i === n) {
    for (var k = 1; k <= n + 1 - i; k++) {
      row = row + "*" + " ";
    }
  } else {
    row = row + "*" + " ";
    for (var l = 1; l <= n - 1 - i; l++) {
      row = row + " " + " ";
    }
    row = row + "*";
  }
  console.log(row);
}
