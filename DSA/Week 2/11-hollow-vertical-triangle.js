var fs = require("fs");
var input = fs.readFileSync(0, "utf-8").trim();
var n = parseInt(input);

function hollowVerticalTriangle(n) {
  for (var i = 0; i < 2 * n - 1; i++) {
    row = "";
    if (i < n) {
      for (var j = 0; j < i + 1; j++) {
        if (j === 0 || j === i) {
          row = row + " " + "*";
        } else {
          row = row + " " + " ";
        }
      }
    } else {
      for (var k = 0; k < 2 * n - 1 - i; k++) {
        if (k === 0 || k === 2 * n - 2 - i) {
          row = row + " " + "*";
        } else {
          row = row + " " + " ";
        }
      }
    }
    console.log(row);
  }
}

hollowVerticalTriangle(n);
