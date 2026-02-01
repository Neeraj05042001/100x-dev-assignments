var fs = require("fs");
var input = fs.readFileSync(0, "utf-8").trim();

var n = Number(input);
var rev = 0;

while (n > 0) {
  var lastDigit = n % 10;
  rev = rev * 10 + lastDigit;
  n = Math.floor(n / 10);
}

console.log(rev);
