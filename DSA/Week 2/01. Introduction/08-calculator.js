var fs = require("fs");
var input = fs.readFileSync(0, "utf-8").trim();

var [m, n] = input.split(/\s/).map(Number);

var add = m + n;
var difference = m - n;
var product = m * n;
var divison = Math.floor(m / n);
var remainder = m % n;

console.log(`${m} + ${n} = ${add}`);
console.log(`${m} - ${n} = ${difference}`);
console.log(`${m} * ${n} = ${product}`);
console.log(`${m} / ${n} = ${divison}`);
console.log(`${m} % ${n} = ${remainder}`);
