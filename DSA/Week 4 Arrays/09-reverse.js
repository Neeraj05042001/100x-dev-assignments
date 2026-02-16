const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const n = parseInt(input[0]);
const arr = input[1].split(" ").map(Number);

console.log(arr.reverse().join(" "));
