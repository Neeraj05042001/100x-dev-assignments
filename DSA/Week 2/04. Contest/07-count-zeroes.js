const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();
const n = Number(input);
let copyN = n;
let count = 0;
if (copyN === 0) {
  count++;
}
while (copyN > 0) {
  let lastDigit = copyN % 10;
  if (lastDigit === 0) {
    count++;
  }
  copyN = Math.floor(copyN / 10);
}
console.log(count);
