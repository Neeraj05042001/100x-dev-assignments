const input = require("fs")
  .readFileSync(0, "utf8")
  .trim()
  .split("\n");
let idx = 0;

const t = parseInt(input[idx++]);

for (let i = 0; i < t; i++) {
  const n = parseInt(input[idx++]);
  const arr1 = n > 0 ? input[idx++].split(" ").map(Number) : [];

  const m = parseInt(input[idx++]);
  const arr2 = m > 0 ? input[idx++].split(" ").map(Number) : [];

  const counter = {};

  for (let i = 0; i < arr2.length; i++) {
    counter[arr2[i]] = (counter[arr2[i]] || 0) + 1;
  }

  const intersection = [];
  for (let j = 0; j < arr1.length; j++) {
    const el = arr1[j];
    if (counter[el] > 0) {
      intersection.push(el);
      counter[el]--;
    }
  }

  console.log(intersection.join(" "));
}
