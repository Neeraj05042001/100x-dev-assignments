const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();
const [m, n] = input.split(/\s+/).map((x) => Number(x));

for (let i = 1; i <= m; i++) {
  let row = "";
  if (i === 1 || i === m) {
    for (let j = 1; j <= n; j++) {
      row = row + "^";
    }
  } else {
    for (let k = 1; k <= n; k++) {
      if (k === 1 || k === n) {
        row = row + "^";
      } else {
        row = row + " ";
      }
    }
  }
  console.log(row);
}
