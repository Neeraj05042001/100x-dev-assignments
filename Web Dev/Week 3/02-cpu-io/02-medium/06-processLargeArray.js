// Problem Description – Non-Blocking Large Array Processing

// You are given a very large array containing around 100,000 items that must be processed.
// Your task is to implement a strategy that performs this processing without blocking the main thread, ensuring the browser UI remains responsive.
// The solution should break the work into smaller chunks and schedule them asynchronously.
async function processLargeArray(items, processFn) {
  const chunkSize = 1000;

  const yieldControl = () => new Promise((resolve) => setTimeout(resolve, 0));

  for (let i = 0; i < items.length; i += chunkSize) {
    const chunk = items.slice(i, i + chunkSize);

    for (const item of chunk) {
      processFn(item);
    }
  }
  await yieldControl();
}

module.exports = processLargeArray;
