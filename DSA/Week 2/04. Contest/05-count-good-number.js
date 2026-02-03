const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const n = Number(input[0]);
const numbers = input[1].split(/\s+/).map((x) => Number(x));

let count = 0;
for (let i = 0; i < numbers.length; i++) {
  const x = numbers[i];
  if (x === 0 || 18 % x === 0 || x % 45 === 0) {
    count++;
  }
}
console.log(count);
