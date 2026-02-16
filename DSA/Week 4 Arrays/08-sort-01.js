const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const t = parseInt(input[0]);
let lineIndex = 1;

for (let tc = 0; tc < t; tc++) {
  const n = parseInt(input[lineIndex]);
  const arr = input[lineIndex + 1].split(" ").map(Number);
  lineIndex += 2;

  arr.sort((a, b) => a - b);

  console.log(arr.join(" "));
}
