// Todo: Write a function that takes N as a parameter and prints the string I am learning functions exactly N times, each on a new line.

// Input: 3
// Output:
//           I am learning functions
//           I am learning functions
//           I am learning functions

const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim();
const n = parseInt(input);
function hello(n) {
  for (let i = 1; i <= n; i++) {
    console.log("I am learning functions");
  }
}
hello(n);
