var fs = require("fs");
var input = fs.readFileSync(0, "utf-8").trim();

var [x, n] = input.split(/\s+/);

x = BigInt(x);
n = Number(n);

let result = 1n;
for (let i = 0; i < n; i++) {
  result *= x;
}

console.log(result.toString());




// ### ✅ Key Learnings to Remember

// * **JavaScript `Number` is NOT safe for large integers**

//   * Accurate only up to `2^53 − 1 ≈ 9 × 10^15`
//   * Values like `10^20` lose precision

// * **`x ** n` can give WRONG answers in JS**

//   * Even when `x ≤ 10` and `n ≤ 20`
//   * Precision error happens silently

// * **Constraints guide data type choice, not validation**

//   * Do NOT write `if (x >= -10 && x <= 10)`
//   * Judges already guarantee valid input

// * **Use `BigInt` when exact large integers are required**

//   * Especially for powers, factorials, large sums

// * **Never mix `Number` and `BigInt`**

//   * `BigInt + Number` ❌
//   * `BigInt ** Number` ❌
//   * Convert explicitly

// * **Best safe pattern for powers in JS CP**

//   ```js
//   let result = 1n;
//   for (let i = 0; i < n; i++) result *= x;
//   ```

// * **Hidden test cases target language limits**

//   * Not logic mistakes
//   * Precision traps are common

// * **JS behaves differently from C++ / Python**

//   * Python & C++ handle big integers automatically
//   * JS needs `BigInt`

// * **Limit checks DO NOT fix precision bugs**

//   * Precision error occurs before logic checks

// * **Correct-looking code can still fail**

//   * Elegance ≠ correctness in CP

// * **This was a language issue, not a logic issue**

//   * Important for confidence & interviews


// ### 🔑 One-line rule to memorize

// > **If the result can exceed `9e15`, use `BigInt` in JavaScript.**


