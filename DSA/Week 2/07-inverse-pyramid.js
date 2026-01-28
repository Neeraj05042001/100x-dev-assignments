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
