var fs = require("fs");
var input = fs.readFileSync(0, "utf8").trim();
var n = parseInt(input);

function hello(n) {
  for (var i = 0; i < n; i++) {
    console.log("Hello Codeforces", i + 1);
  }
}
hello(n);


