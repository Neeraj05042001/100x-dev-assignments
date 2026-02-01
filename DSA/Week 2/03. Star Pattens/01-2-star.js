// Todo: Write a program to print the following 2-star pattern

// When input =5, output as below:

//        **
//        **
//        **
//        **
//        **

// when input is 3, output is as follows:
//        **
//        **
//        **



var fs = require("fs");
var input = fs.readFileSync(0, "utf8").trim();
var n = parseInt(input);

function star(n) {
  for (var i = 0; i < n; i++) {
    console.log("**");
  }
}

star(n);
