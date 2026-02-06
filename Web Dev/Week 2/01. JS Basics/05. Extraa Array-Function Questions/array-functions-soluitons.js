// Todo: Question-1:  Write a function that takes an array and a callback function. Apply the callback function to each element of the array and return a new array with the modified elements.

const arr = [1, 2, 3, 4, 5];
function double(x) {
  return x * x;
}

function main(arr, callback) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    const double = callback(arr[i]);
    newArray.push(double);
  }
  return newArray;
}
const result = main(arr, double);
console.log(result);
// Todo: Question-2:  Write a function that takes an array of numbers and returns a new array containing only the odd numbers.

// creating a larger array
const arr2 = [];
for (let i = 0; i <= 50; i++) {
  arr2.push(i);
}

function odd(arr) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}
const resultOdd = odd(arr2);
console.log(resultOdd);
// Todo: Question-3:  Write a function that takes an array of numbers and returns a new array where each element is doubled.
const arr3 = [1, 2, 3, 4, 5];
function double(x) {
  return x * x;
}

function main(arr, callback) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    const double = callback(arr[i]);
    newArray.push(double);
  }
  return newArray;
}
const result3 = main(arr3, double);
console.log(result3);

// Todo: Question-4:  Write a function that takes an array of strings and returns a new array where each string is transformed to uppercase.
const fruits = ["apple", "banana", "orange", "mango"];

function uppercase(fruits) {
  const newFruits = [];
  for (let i = 0; i < fruits.length; i++) {
    newFruits.push(fruits[i].toUpperCase());
  }
  return newFruits;
}

const result4 = uppercase(fruits);
console.log(result4);

// Todo: Question-5:  Write a function that uses setTimeout to simulate an asynchronous operation. The function should print a message to the console after a specified delay.

function delay(n) {
  setTimeout((n) => {
    console.log(`Hello, logging this after ${n} seconds`);
  }, n * 1000);
}
delay(4);
// Todo: Question-6:  WAP to perform read and write operation in a text file in JS.

const fs = require("fs");

// READ
fs.readFile("input.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error:", err);
    return;
  }
  console.log("Read:", data);

  // WRITE (after reading)
  fs.writeFile("output.txt", "New data: " + data, (err) => {
    if (err) {
      console.error("Error:", err);
      return;
    }
    console.log("Write successful!");
  });
});
