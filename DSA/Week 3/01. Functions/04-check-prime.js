const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim();
const n = parseInt(input);

function prime(n) {
  let factors = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      factors = factors + 1;
    }
  }
  if (factors === 2) {
    return "Prime";
  } else {
    return "Not Prime";
  }
}
const result = prime(n);
console.log(result);
