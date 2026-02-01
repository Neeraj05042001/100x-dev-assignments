var fs = require("fs");
var input = fs.readFileSync(0, "utf-8").trim();

var n = Number(input);   
var m = n;             
var reverse = 0;

while (m > 0) {
  var lastDigit = m % 10;
  reverse = reverse * 10 + lastDigit;
  m = Math.floor(m / 10);
}

if (reverse === n) {
  console.log("YES");
} else {
  console.log("NO");
}
