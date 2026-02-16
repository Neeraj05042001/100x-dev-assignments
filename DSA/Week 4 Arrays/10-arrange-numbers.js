const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n").map(Number);

const t = input[0];

for (let i = 1; i <= t; i++) {
  const n = input[i];
  let arr = [];
  let odd = [];
  let even = [];

  for (let j = 1; j <= n; j++) {
    if (j % 2 === 0) {
      even.push(j);
    } else {
      odd.push(j);
    }
  }

  arr = [...odd, ...even.reverse()];

  console.log(arr.join(" "));
}
