var fs = require("fs");
var input = fs.readFileSync(0, "utf-8").trim();

var arr = input.split(/\s+/).map(Number);
var l = arr[0];
var r = arr[1];

var result = "";
for (var i = l; i <= r; i++) {
  result = result + i;

  if (i !== r) {
    result = result + " ";
  }
}
console.log(result);
