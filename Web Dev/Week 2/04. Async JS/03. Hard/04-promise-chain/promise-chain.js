/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t1) {
  const promise1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, t1 * 1000);
  });
  return promise1;
}

function wait2(t2) {
  const promise2 = new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, t2 * 1000);
  });
  return promise2;
}

function wait3(t3) {
  const promise3 = new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, t3 * 1000);
  });
  return promise3;
}

function calculateTime(t1, t2, t3) {
  const startTime = Date.now();
  return wait1(t1)
    .then(() => wait2(t2))
    .then(() => wait3(t3))
    .then(() => {
      const endTime = Date.now();
      return endTime - startTime;
    });
}

module.exports = calculateTime;
