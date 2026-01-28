var fs = require("fs");
var input = fs.readFileSync(0, "utf8").trim();
var n = parseInt(input);

function numberedTriangle(n) {
  for (var i = 0; i < n; i++) {
    var row = "";
    for (var j = 0; j < i + 1; j++) {
      row = row + (i + 1);
    }
    console.log(row);
  }
}
numberedTriangle(n);
