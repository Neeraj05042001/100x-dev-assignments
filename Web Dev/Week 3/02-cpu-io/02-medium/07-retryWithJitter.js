// Problem Description – Retry with Exponential Backoff and Jitter

// You are required to implement a retry mechanism for an asynchronous task that fails. 
// On each retry, the delay before the next attempt should increase, and a small random “jitter”
// should be added to the delay to prevent synchronized retries that can overload a server. 
// The process should stop once the task succeeds or the maximum retry limit is reached.
async function retryWithJitter(fn, retries = 3, baseDelay = 1000) {
  // sleep helper
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      // try the function
      return await fn();
    } catch (err) {
      // if we've used all retries, throw the last error
      if (attempt === retries) {
        throw err;
      }

      // exponential backoff + jitter
      const exponential = baseDelay * Math.pow(2, attempt);
      const jitter      = Math.random() * baseDelay;
      const delay       = exponential + jitter;

      await sleep(delay);
    }
  }
}

module.exports = retryWithJitter;