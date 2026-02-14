// Problem Description – Chunk Array
//
// When dealing with large datasets, it's often necessary to process them
// in smaller batches (chunks) to avoid overloading the CPU or I/O.
//
// Your task is to implement a function `chunkArray(array, size)` that
// splits an array into sub-arrays of a maximum specified size.
//
// Requirements:
// 1. The function should return a new array containing the chunks.
// 2. The last chunk might be smaller than the specified size.
// 3. Handle edge cases like empty arrays or chunk size <= 0.
//
// This is a prerequisite for common patterns like batching API calls.

function chunkArray(array, size) {
  const chunk = [];

  if (array === null || array === undefined || size <= 0) {
    return chunk;
  }

  while (array.length >= size && size > 0) {
    const newArray = array.splice(0, size);
    chunk.push(newArray);
  }
  if (array.length < size && array.length !== 0) {
    chunk.push(array);
  }
  return chunk;
}


module.exports = chunkArray;

// here prefer to use slice as splice mutates the original array and also try to use for loop instead of while loop
