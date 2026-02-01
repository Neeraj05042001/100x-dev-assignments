const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim();
const n = parseInt(input);

function countZeroes(n) {
  let nCopy = n;
  let lastDigit;
  let zeroCount = 0;
  if (n === 0) return (zeroCount = 1);
  while (nCopy > 0) {
    lastDigit = nCopy % 10;
    nCopy = Math.floor(nCopy / 10);
    if (lastDigit === 0) {
      zeroCount = zeroCount + 1;
    }
  }
  return zeroCount;
}
const result = countZeroes(n);
console.log(result);
