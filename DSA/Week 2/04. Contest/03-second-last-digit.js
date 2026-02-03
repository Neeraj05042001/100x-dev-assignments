const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();
const n = Number(input);
let cn = n;
let count = 1;
while (cn > 0) {
  let lastDigit = cn % 10;
  cn = Math.floor(cn / 10);
  if (count === 2) {
    console.log(lastDigit);
  }
  count = count + 1;
}
