var fs = require("fs");
var input = fs.readFileSync(0, "utf8").trim();
var n = parseInt(input);

function star(n) {
  for (var i = 0; i < n; i++) {
    console.log("**");
  }
}

star(n);
