// Todo: You are given the coordinates of a point (X,Y) on a Cartesian plane. Your task is to determine the location of the point.

// The possible locations are:

// Origin — if X=0 and Y=0
// X axis — if Y=0 and X≠0
// Y axis — if X=0 and Y≠0
// 1st Quadrant — if X>0 and Y>0
// 2nd Quadrant — if X<0 and Y>0
// 3rd Quadrant — if X<0 and Y<0
// 4th Quadrant — if X>0 and Y<0

// Input: 1 10
// Output: 1st Quardant

// Input: 0 0
// Input: Origin

var fs = require("fs");
var input = fs.readFileSync(0, "utf-8").trim();

var [x, y] = input.split(/\s+/).map((x) => Number(x));

if (x === 0 && y === 0) {
  console.log("Origin");
} else if (y === 0 && x !== 0) {
  console.log("X axis");
} else if (x === 0 && y !== 0) {
  console.log("Y axis");
} else if (x > 0 && y > 0) {
  console.log("1st Quadrant");
} else if (x < 0 && y > 0) {
  console.log("2nd Quadrant");
} else if (x < 0 && y < 0) {
  console.log("3rd Quadrant");
} else if (x > 0 && y < 0) {
  console.log("4th Quadrant");
}
