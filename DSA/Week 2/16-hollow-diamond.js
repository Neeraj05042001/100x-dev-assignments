var fs = require("fs");
var input = fs.readFileSync(0, "utf-8").trim();
var n = parseInt(input);

for (var i = 1; i <= 2 * n - 1; i++) {
  var row = "";
  if (i <= (2 * n) / 2) {
    for (var j = 1; j <= n - i; j++) {
      row = row + " ";
    }
    for (var k = 1; k <= i; k++) {
      if (k == 1 || k === i) {
        row = row + "*" + " ";
      } else {
        row = row + " " + " ";
      }
    }
  } else {
    for (var p = 1; p <= i - n; p++) {
      row = row + " ";
    }

    for (var q = 1; q <= 2 * n - i; q++) {
      if (q === 1 || q === 2 * n - i) {
        row = row + "*" + " ";
      } else {
        row = row + " " + " ";
      }
    }
  }

  console.log(row);
}
