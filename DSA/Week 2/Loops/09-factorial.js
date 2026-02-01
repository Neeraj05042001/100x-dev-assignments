var fs = require("fs");
var input = fs.readFileSync(0, "utf-8").trim();
var n = parseInt(input);

var factorial = 1;

for (var i = 1; i <= n; i++) {
  factorial = factorial * i;
}
console.log(factorial);
