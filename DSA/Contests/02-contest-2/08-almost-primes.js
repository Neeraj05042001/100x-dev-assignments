const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();

const n = parseInt(input);

function countDivisors(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      count++;
    }
  }
  return count;
}

function findAlmostPrimes(n) {
  const almostPrimes = [];
  
  for (let x = 1; x <= n; x++) {
    const divisorCount = countDivisors(x);
    if (divisorCount <= 4) {
      almostPrimes.push(x);
    }
  }
  
  return almostPrimes;
}

const result = findAlmostPrimes(n);
console.log(result.join(' '));