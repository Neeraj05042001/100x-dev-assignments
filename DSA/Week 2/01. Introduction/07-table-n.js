var fs = require("fs");
var input = fs.readFileSync(0, "utf-8").trim();

var n = parseInt(input);
for (var i = 1; i <= 10; i++) {
  console.log(`${n} * ${i} = ${n * i}`);
}
