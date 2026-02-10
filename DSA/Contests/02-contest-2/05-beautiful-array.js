const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const n = parseInt(input[0]);
const arr = input[1].split(" ").map(Number);

const beautiful = arr.filter((elm) => arr[0] === elm);
if (beautiful.length === arr.length) {
  console.log("YES");
} else {
  console.log("NO");
}
