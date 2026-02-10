/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
  return new Promise((resolve) => {
    // Busy wait - blocks the thread
    const startTime = Date.now();
    
    // Keep looping until the specified time has passed
    while (Date.now() - startTime < milliseconds) {
      // Do nothing - just burn CPU cycles
      // This blocks the JavaScript thread completely
    }
    
    // Once the time has elapsed, resolve the promise
    resolve();
  });
}

module.exports = sleep;