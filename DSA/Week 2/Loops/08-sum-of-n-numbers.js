var fs = require("fs");
var input = fs.readFileSync(0, "utf-8").trim();
var n = parseInt(input);

var sum = 0;

for (var i = 1; i <= n; i++) {
  sum = sum + i;
}
console.log(sum);
