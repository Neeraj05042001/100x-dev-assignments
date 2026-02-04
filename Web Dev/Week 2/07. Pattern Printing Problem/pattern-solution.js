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

// for (let i = 1; i <= 4; i++) {
//   let row = "";
//   for (let j = 1; j <= 4 - i; j++) {
//     row = row + " ";
//   }
//   for (let k = 1; k <= i; k++) {
//     row = row + "*";
//   }
//   if (i > 1 && i<=4) {
//     for (let l = 1; i - 1; l++) {
//       row = row + "*";
//     }
//   }
//   console.log(row);
// }

// *****
// *   *
// *   *
// *****

for(let i=1; i<=4; i++){
    let row=""
    for(let j=1; j<=5; j++){
        if(i===1 || i===4){
            row=row+"*"
        }else{
            
        }
    }
}

// 1
// 12
// 123
// 1234
// 12345

//     A
//    BBB
//   CCCCC
//  DDDDDDD
// EEEEEEEEE
