const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const n = parseInt(input[0]);
const arr = input[1].split(" ").map(Number);

function findUniqueElements(arr) {
  // Count frequency of each element
  const frequency = {};
  
  for (let num of arr) {
    frequency[num] = (frequency[num] || 0) + 1;
  }
  
  // Filter elements that appear exactly once, maintaining original order
  const result = [];
  
  for (let num of arr) {
    if (frequency[num] === 1) {
      result.push(num);
      frequency[num] = 0; // Mark as processed to avoid duplicates in result
    }
  }
  
  return result;
}

const result = findUniqueElements(arr);

if (result.length === 0) {
  console.log("");  // Print empty line
} else {
  console.log(result.join(' '));
}