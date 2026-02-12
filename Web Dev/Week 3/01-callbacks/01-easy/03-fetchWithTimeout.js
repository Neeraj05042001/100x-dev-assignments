// Problem Description – fetchWithTimeout(url, ms, callback)
//
// You are required to write a function named fetchWithTimeout that accepts a URL,
// a time limit in milliseconds, and a callback function.
// The function attempts to fetch data from the given URL.
// If the request completes within the specified time, the callback is invoked with
// null as the first argument and the fetched data as the second argument.
// If the operation exceeds the time limit, the callback is invoked with an Error
// whose message is "Request Timed Out".

function fetchWithTimeout(url, ms, cb) {
  let timedOut = false;  // ✅ Boolean flag to track timeout status

  const timeoutId = setTimeout(() => {  // ✅ Store the timer ID
    timedOut = true;
    cb(new Error("Request Timed Out"));
  }, ms);
  
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        // ✅ Include status in error message
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      if (!timedOut) {  // ✅ Check the boolean flag
        clearTimeout(timeoutId);  // ✅ Clear using the timer ID
        cb(null, data);
      }
    })
    .catch((error) => {
      if (!timedOut) {  // ✅ Check the boolean flag
        clearTimeout(timeoutId);  // ✅ Clear using the timer ID
        cb(error);
      }
    });
}



module.exports = fetchWithTimeout;
