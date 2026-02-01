// TODO: You are given two integers N and M. Your task is to compute and print the results of the following operations:

// Input

// 1000000000
// 1000000000

// output:
// 1000000000 + 1000000000 = 2000000000

// 1000000000 - 1000000000 = 0

// 1000000000 * 1000000000 = 1000000000000000000

// 1000000000 / 1000000000 = 1

// 1000000000 % 1000000000 = 0

var fs = require("fs");
var input = fs.readFileSync(0, "utf-8").trim();

var [n, m] = input.split(/\s+/).map((x) => BigInt(x));

var add = n + m;
var difference = n - m;
var product = n * m;
var division = n / m;
var remainder = n % m;

console.log(`${n} + ${m} = ${add}\n`);
console.log(`${n} - ${m} = ${difference}\n`);
console.log(`${n} * ${m} = ${product}\n`);
console.log(`${n} / ${m} = ${division}\n`);
console.log(`${n} % ${m} = ${remainder}`);
