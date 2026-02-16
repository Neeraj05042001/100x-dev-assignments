const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const n = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let count = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === n[0] || arr[i] === n[1]) {
    count += 1;
  }
}
console.log(count);
