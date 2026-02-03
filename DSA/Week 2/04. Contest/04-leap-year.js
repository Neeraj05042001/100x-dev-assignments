const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();
const y = Number(input);

if (y % 100 === 0 && y % 400 === 0) {
  console.log("Yes");
} else if (y % 100 !== 0 && y % 4 === 0) {
  console.log("Yes");
} else {
  console.log("No");
}
