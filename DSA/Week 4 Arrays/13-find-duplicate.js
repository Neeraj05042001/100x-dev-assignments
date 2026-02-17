const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

let idx = 0;
const t = parseInt(input[idx++]);
for (let i = 0; i < t; i++) {
  const n = parseInt(input[idx++]);
  const arr = n > 0 ? input[idx++].split(" ").map(Number) : [];

  let counter = {};
  for (let i = 0; i < arr.length; i++) {
    counter[arr[i]] = (counter[arr[i]] || 0) + 1;
  }

  for (let [key, value] of Object.entries(counter)) {
    if (value === 2) {
      console.log(key);
      break
    }
  }
}
