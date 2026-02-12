// Problem Description – once(fn)
//
// You are required to implement a wrapper function named once that accepts a
// callback-based asynchronous function `fn`.
// The wrapper should ensure that `fn` is executed only on the first call.
// Any subsequent calls should not re-execute `fn` and should instead invoke
// the callback with the same result (or error) from the first invocation.

function once(fn) {
  let hasBeenCalled = false;
  let storedError = null;
  let storedResult = null;

  return function(...args) {  // ✅ Accept any number of arguments
    const callback = args[args.length - 1];  // Last arg is always the callback

    if (hasBeenCalled) {
      // Already called, return stored result
      callback(storedError, storedResult);
    } else {
      // First call
      hasBeenCalled = true;
      fn(...args.slice(0, -1), (err, result) => {  // Pass all args except callback
        storedError = err;
        storedResult = result;
        callback(err, result);
      });
    }
  };
}

module.exports = once