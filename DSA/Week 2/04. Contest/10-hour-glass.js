const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();
const n = Number(input);

for (let i = 1; i <= 2 * n - 1; i++) {
  let row = "";
  if (i === 1 || i === 2 * n - 1) {
    for (let j = 1; j <= n; j++) {
      if (j !== n) {
        row = row + "." + " ";
      } else {
        row = row + ".";
      }
    }
  }
  if (i >= 2 && i <= n) {
    for (let k = 1; k <= i - 1; k++) {
      row = row + " ";
    }
    for (let l = 1; l <= n - (i - 1); l++) {
      if (l !== n - (i - 1)) {
        row = row + "." + " ";
      } else {
        row = row + ".";
      }
    }
  } else if (i > n && i < 2 * n - 1) {
    for (let k = 1; k <= 2 * n - 1 - i; k++) {
      row = row + " ";
    }
    for (let l = 1; l <= i - n + 1; l++) {
      if (l !== i - n + 1) {
        row = row + "." + " ";
      } else {
        row = row + ".";
      }
    }
  }
  console.log(row);
}
