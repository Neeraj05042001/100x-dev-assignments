const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [a, b] = input[0].split(" ").map(Number);

if (a === 0 && b == 1) {
  console.log("Yes");
} else if (a === 1 && b === 0) {
  console.log("Yes");
} else if (a === b) {
  console.log("Yes");
} else {
  console.log("No");
}
