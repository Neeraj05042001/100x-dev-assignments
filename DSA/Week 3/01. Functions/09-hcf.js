const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim();

const [a, b] = input.split(/\s+/).map((x) => Number(x));

function hcf(a, b) {
  let divisor = a;
  let dividend = b;
  let remainder = dividend % divisor;
  while (remainder > 0) {
    dividend = divisor;
    divisor = remainder;
    remainder = dividend % divisor;
  }
  return divisor;
}

const result = hcf(a, b);
console.log(result);
