const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim();

const [n, r] = input.split(/\s+/).map((x) => Number(x));

function binomial(n, r) {
  let nFactor = 1;
  let rFactor = 1;
  let nrDifference = n - r;
  let nrDifferenceFactor = 1;
  for (let i = 1; i <= n; i++) {
    nFactor = nFactor * i;
  }

  for (let j = 1; j <= r; j++) {
    rFactor = rFactor * j;
  }
  for (let k = 1; k <= nrDifference; k++) {
    nrDifferenceFactor = nrDifferenceFactor * k;
  }

  let binomialCoffecient = nFactor / (rFactor * nrDifferenceFactor);

  return binomialCoffecient;
}

const result = binomial(n, r);
console.log(result);
