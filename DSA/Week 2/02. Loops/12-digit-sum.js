var fs = require("fs");
var input = fs.readFileSync(0, "utf-8").trim();

var sum = 0;
for (let ch of input) {
  sum += Number(ch);
}

console.log(sum);
