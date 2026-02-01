var fs = require("fs");
var input = fs.readFileSync(0, "utf-8").trim();
var n = parseInt(input);
var result = "";
for (var i = 1; i <= 10; i++) {
  result = n + " " + "*" + " " + +i + " " + "=" + " " + n * i;
  console.log(result);
}
