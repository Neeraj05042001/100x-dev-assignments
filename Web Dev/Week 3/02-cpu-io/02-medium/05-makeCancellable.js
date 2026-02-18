
// Problem Description – Abortable Promise Wrapper

// You are required to wrap a Promise so that it can be cancelled using an AbortSignal.
// If the signal is aborted before the Promise settles, the wrapper should immediately reject with an appropriate error. 
// If not aborted, it should resolve or reject normally.

function makeCancellable(promise, signal) {
  // Step 1: already aborted before we even start
  if (signal.aborted) {
    return Promise.reject(new Error('Aborted'));
  }

  return new Promise((resolve, reject) => {

    // Step 4: abort handler — fires if signal.abort() is called
    const onAbort = () => {
      reject(new Error('Aborted'));
    };

    signal.addEventListener('abort', onAbort);

    // Step 3: hook the original promise
    promise.then(
      (result) => {
        signal.removeEventListener('abort', onAbort); // Step 5: cleanup
        resolve(result);
      },
      (err) => {
        signal.removeEventListener('abort', onAbort); // Step 5: cleanup
        reject(err);
      }
    );

  });
}

module.exports = makeCancellable;
