// Problem Description – Smart Progress Bar (CPU Yielding)
//
// You need to process a large list of items without blocking
// the event loop.
//
// Process the items in small chunks and yield control back
// to the event loop after each chunk so the system stays responsive.
//
// Requirements:
// - Implement chunkedProcessor(items, processFn, onComplete).
// - Process items in fixed-size chunks.
// - Yield using setImmediate after each chunk.
// - Call onComplete after all items are processed.
function chunkedProcessor(items, processFn, onComplete) {
  let position = 0;
  let chunkSize = 10;

  function process() {
    for (
      let i = position;
      i < Math.min(position + chunkSize, items.length);
      i++
    ) {
      processFn(items[i]);
    }
    position += chunkSize;

    if (position < items.length) {
      setImmediate(process);
    } else {
      onComplete();
    }
  }

  process();
}

module.exports = chunkedProcessor;
