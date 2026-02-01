var fs = require("fs");
var input = fs.readFileSync(0, "utf-8").trim();
var n = parseInt(input);
var even = "";

for (var i = 1; i <= n; i++) {
  if (i % 2 === 0) {
    even = even + i;
  }
  if (i !== 1) {
    even = even + " ";
  }
}
console.log(even);
