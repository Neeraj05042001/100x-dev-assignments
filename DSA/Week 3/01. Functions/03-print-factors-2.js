const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim();
const n = parseInt(input);

function factor1(n) {
  let factors = "";
  for (let i = n; i >= 1; i--) {
    if (n % i === 0) {
      factors = factors + i + " ";
    }
  }
  return factors;
}

const result = factor1(n);
console.log(result);
