// Todo:
//        *
//        **
//        ***
//        ****
//        *****
console.log("QUESTION: 1");
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row = row + "*";
  }
  console.log(row);
}

// Todo:  WAP to print this
console.log("QUESTION: 2");

//    *
//   ***
//  *****
// *******

for (let i = 1; i <= 4; i++) {
  let row = "";
  for (let j = 1; j <= 4 - i; j++) {
    row = row + " ";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    row = row + "*";
  }
  console.log(row);
}

// Todo: 3: WAP to print this
// *****
// *   *
// *   *
// *****
console.log("Question 3");
for (let i = 1; i <= 4; i++) {
  let row = "";
  for (let j = 1; j <= 5; j++) {
    if (i === 1 || i === 4) {
      row = row + "*";
    } else {
      if (j === 1 || j === 5) {
        row = row + "*";
      } else {
        row = row + " ";
      }
    }
  }
  console.log(row);
}
// Todo: 4: WAP to print this
// 1
// 12
// 123
// 1234
// 12345
console.log("Question 4");
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row = row + j;
  }
  console.log(row);
}
// Todo:  5: WAP to print this
//     A
//    BBB
//   CCCCC
//  DDDDDDD
// EEEEEEEEE
console.log("Question 5");
for (let i = 0; i < 5; i++) {
  let row = "";

  for (let j = 1; j <= 5 - i; j++) {
    row = row + " ";
  }
  for (let k = 1; k <= 2 * i + 1; k++) {
    row = row + String.fromCharCode(65 + i);
  }
  console.log(row);
}
