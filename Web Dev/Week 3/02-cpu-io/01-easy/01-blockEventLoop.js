// Problem Description – Block Event Loop
//
// In Node.js, long-running synchronous operations block the event loop,
// preventing other tasks (like timers or I/O) from executing.
//
// Your task is to implement a function `blockEventLoop(ms)` that
// synchronously blocks the execution for the given duration.
//
// Requirements:
// 1. Do NOT use `setTimeout` or Promises (those are non-blocking).
// 2. Use a `while` loop with `Date.now()` or `performance.now()`.
// 3. This is a teaching tool to show how NOT to write async code.

function blockEventLoop(ms) {
  const startTime = Date.now();
  while (Date.now() - startTime <= ms) {
    console.log(startTime - Date.now());
  }
  console.log("Timer ended");
}

// blockEventLoop(1000);
module.exports = blockEventLoop;

// Date.now():- It gives the time in milli seconds from the 1 january 1970 to till now
// performance.now(): it gives the time in micro seconds from the time code starts executing to where it is called
