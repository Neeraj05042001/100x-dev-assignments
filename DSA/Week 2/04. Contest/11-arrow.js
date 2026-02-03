const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();
const n = Number(input);

for (let i = 1; i <= 2 * n - 1; i++) {
  let row = "";
  
  // First and last rows - single >
  if (i === 1 || i === 2 * n - 1) {
    row = ">";
  }
  // Upper half (rows 2 to n)
  else if (i >= 2 && i <= n) {
    // Leading spaces
    for (let k = 1; k <= i - 1; k++) {
      row += " ";
    }
    row += ">";
    
    // Middle spaces between two >
    let middleSpaces = 2 * (i - 2) + 1;
    for (let m = 1; m <= middleSpaces; m++) {
      row += " ";
    }
    row += ">";
  }
  // Lower half (rows n+1 to 2n-2)
  else {
    // Calculate corresponding row from top (mirror)
    let mirrorRow = 2 * n - i;
    
    // Leading spaces
    for (let k = 1; k <= mirrorRow - 1; k++) {
      row += " ";
    }
    row += ">";
    
    // Middle spaces between two >
    let middleSpaces = 2 * (mirrorRow - 2) + 1;
    for (let m = 1; m <= middleSpaces; m++) {
      row += " ";
    }
    row += ">";
  }
  
  console.log(row);
}