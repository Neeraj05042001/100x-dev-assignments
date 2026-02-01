var fs = require("fs");
var input = fs.readFileSync(0, "utf-8").trim();
var n = input.toString();

var q = n;
var r = "";
for (var i = 0; i < n.length; i++) {
  r = r + (q % 10);
  q = Math.floor(q / 10);
}
console.log(r);
