var fs = require("fs");
var input = fs.readFileSync(0, "utf8").trim();
var parts = input.split(" ");
var m = parseInt(parts[0]);
var n = parseInt(parts[1]);

function mStar(m, n) {
  for (var i = 0; i < m; i++) {
    var row = "";
    for (j = 0; j < n; j++) {
      row = row + "*";
    }
    console.log(row);
  }
}
mStar(m, n);
