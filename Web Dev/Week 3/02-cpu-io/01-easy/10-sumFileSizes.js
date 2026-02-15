// Problem Description – Sum File Sizes
//
// You are given an array of file paths. Your task is to implement a function
// that returns the total size of all these files in bytes.
//
// Requirements:
// 1. Use fs.promises.stat() to get file information.
// 2. Return the sum of `size` property of all files.
// 3. Handle cases where a file might not exist (optional: you can let it throw or return 0).
// 4. Tasks should ideally be performed in parallel for efficiency.

const fs = require("fs").promises;

async function sumFileSizes(filePaths) {
  const startPromises = filePaths.map(async (file) => {
    const stat = await fs.stat(file);
    if (!stat) throw Error("File not found");
    return stat.size;
  });
  const fileSizes = Promise.all(startPromises);

  const sum = (await fileSizes).reduce((sum, size) => sum + size, 0);
  return sum;
}

module.exports = sumFileSizes;
