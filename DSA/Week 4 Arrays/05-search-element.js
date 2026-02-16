const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const n = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);



if (arr.includes(n[0] && n[1])) {
  console.log("YES");
} else {
  console.log("NO");
}
