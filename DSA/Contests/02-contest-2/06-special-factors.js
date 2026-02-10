const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();

const n = parseInt(input);

function getSpecialFactors(n) {
  const specialFactors = [];

  // Find all factors of n
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      // i is a factor
      const lastDigit = i % 10;
      if (lastDigit === 2 || lastDigit === 7) {
        specialFactors.push(i);
      }

      // n/i is also a factor (if different from i)
      if (i !== n / i) {
        const otherFactor = n / i;
        const otherLastDigit = otherFactor % 10;
        if (otherLastDigit === 2 || otherLastDigit === 7) {
          specialFactors.push(otherFactor);
        }
      }
    }
  }

  return specialFactors;
}

const result = getSpecialFactors(n);

if (result.length === 0) {
  console.log(-1);
} else {
  // Sort in increasing order
  result.sort((a, b) => a - b);
  console.log(result.join(" "));
}
