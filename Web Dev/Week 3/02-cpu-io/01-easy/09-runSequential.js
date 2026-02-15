// Problem Description – Sequential Execution of Async Functions

// You are given an array of asynchronous functions. Your task is to execute them one by one, ensuring that each function starts only after the previous one has completed.
// The final result should be an array of resolved values in the same order.
async function runSequential(functions) {
  const results = [];
  //   for (let i = 0; i < functions.length; i++) {
  //     results.push(await functions[i]());
  //   }

//   or
  for (let fn of functions) {
    results.push(await fn());
  }
  return results;
}
module.exports = runSequential;
