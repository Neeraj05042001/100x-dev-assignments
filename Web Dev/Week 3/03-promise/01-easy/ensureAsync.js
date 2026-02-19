// Problem Description – ensureAsync(fn)

// You are required to write a function named ensureAsync that takes another function fn as input.
// The goal is to guarantee that calling fn always returns a Promise, even if fn is synchronous.
// Using the async keyword is recommended, as it automatically wraps return values and errors in a Promise.
function ensureAsync(fn) {
  //   return async function (...args) {
  //     return fn(...args);
  //   };

  // or

  return async function (...args) {
    try {
      return await fn(...args);
    } catch (err) {
      throw new Error(err);
    }
  };

  //   The last try catch one logic should only be used when there is something meaningful is needed to be done with catch/error else using try catch is just a noise and should be avoided and simply write logic
}

module.exports = ensureAsync;
