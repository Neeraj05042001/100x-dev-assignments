const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const n = parseInt(input[0]);
const players = input[1].split(" ").map(Number);

function rearrangeSymmetric(n, players) {
  const result = [];
  
  // Find middle indices
  const mid1 = Math.floor(n / 2) - 1;  // middle-left
  const mid2 = Math.floor(n / 2);      // middle-right
  
  // Start with the two middle players
  result.push(players[mid1]);
  result.push(players[mid2]);
  
  // Expand outward alternating left and right
  let left = mid1 - 1;
  let right = mid2 + 1;
  
  while (left >= 0 && right < n) {
    result.push(players[left]);   // Add left
    result.push(players[right]);  // Add right
    left--;
    right++;
  }
  
  return result;
}

const result = rearrangeSymmetric(n, players);
console.log(result.join(' '));