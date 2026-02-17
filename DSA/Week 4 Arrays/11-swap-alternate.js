const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

let idx = 0;
const t = parseInt(input[idx++]);

for (let i = 0; i < t; i++) {
  const n = parseInt(input[idx++]);
  const arr = n > 0 ? input[idx++].split(" ").map(Number) : [];
  const newArr = [];
  for (let i = 0; i < arr.length; i += 2) {
    if (i < arr.length - 1) {
      newArr.push(arr[i + 1]);
    }
    newArr.push(arr[i]);
  }
  console.log(newArr.join(" "));
}