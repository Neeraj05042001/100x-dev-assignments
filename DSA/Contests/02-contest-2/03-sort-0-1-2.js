const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const n = parseInt(input[0]);
const arr = input[1].split(" ").map(Number);

// Sort in descending order
arr.sort((a, b) => b - a);

// Print the result
console.log(arr.join(" "));
