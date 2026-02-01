const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim();
const n = parseInt(input);


function factorial(n) {
  let factors = 1;
  for (let i = 1; i <= n; i++) {
    factors = factors * i;
  }
  return factors;
}
const result = factorial(n);
console.log(result);
