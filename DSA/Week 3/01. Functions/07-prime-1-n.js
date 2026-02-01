const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim();
const n = parseInt(input);

function prime(n) {
  let primeNumbers = "";
  for (let i = 1; i <= n; i++) {
    let countFactors = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        countFactors = countFactors + 1;
      }
    }
    if (countFactors === 2) {
      primeNumbers = primeNumbers + i + " ";
    }
  }
  return primeNumbers;
}

const result = prime(n);
console.log(result);
