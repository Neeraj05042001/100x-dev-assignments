const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const n = parseInt(input[0]);
const arr = input[1].split(" ").map(Number);

// const sorted = arr.toSorted();
// if (arr.join() === sorted.join()) {
//   console.log("YES");
// } else {
//   console.log("NO");
// }

let isSorted = true;

for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] > arr[i + 1]) {
    isSorted = false;
    break;
  }
}
console.log(isSorted ? "YES" : "NO");
