var fs = require("fs");
var input = fs.readFileSync(0, "utf8").trim();

function vowel(ch) {
  if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
vowel(input);
