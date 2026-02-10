const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const n = parseInt(input[0]);
const times = input[1].split(" ").map(Number);

function findFastestRunner(times) {
  let minTime = times[0];
  let fastestRunner = 1;  // Runner IDs start from 1
  
  for (let i = 1; i < times.length; i++) {
    if (times[i] < minTime) {
      minTime = times[i];
      fastestRunner = i + 1;  // Convert index to runner ID (1-indexed)
    } else if (times[i] === minTime) {
      // If same time, choose the one with larger ID
      fastestRunner = Math.max(fastestRunner, i + 1);
    }
  }
  
  return fastestRunner;
}

const result = findFastestRunner(times);
console.log(result);