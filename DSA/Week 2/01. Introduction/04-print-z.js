var n = 5;

for (var i = 1; i <= 5; i++) {
  var row = "";
  if (i === 1 || i === 5) {
    for (var j = 1; j <= n; j++) {
      row = row + "*";
    }
  } else {
    for (var k = 1; k <= n - i; k++) {
      row = row + " ";
    }
    for (var l = 1; l <= 1; l++) {
      row = row + "*";
    }
  }
  console.log(row);
}
