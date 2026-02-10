const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const n = parseInt(input[0]);
const scores = input[1].split(" ").map(Number);
const passing_mark = parseInt(input[2]);

function resultDay(n, scores, passing_mark) {
  const passed_students = scores.filter(
    (marks) => marks >= passing_mark,
  ).length;
  const failed_students = n - passed_students;
  console.log(`Pass: ${passed_students}`);
  console.log(`Fail: ${failed_students}`);
}

resultDay(n, scores, passing_mark);
