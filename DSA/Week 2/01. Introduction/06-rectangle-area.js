var fs = require("fs");
var input = fs.readFileSync(0, "utf-8").trim();
var [m, n] = input.split(/\s/).map(Number);
var area = m * n;
var perimeter = 2 * (m + n);

console.log(`Area = ${area}`);
console.log(`Perimeter = ${perimeter}`);
