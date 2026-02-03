const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();
const n = Number(input);

for (let i = 1; i <= n; i++) {
  let row = "";
  if (i >= 2) {
    for (let j = 1; j <= i - 1; j++) {
      row = row + " ";
    }
  }

  for (let k = 1; k <= i; k++) {
    row = row + "x";
  }
  console.log(row);
}
