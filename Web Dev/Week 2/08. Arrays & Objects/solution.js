// Todo: Sum values in object arrays
// Input

// { food: [10, 20, 30], travel: [5, 15], bills: [40, 60] }

//  Output:
//     { food: 60, travel: 20, bills: 100 }

const input = { food: [10, 20, 30], travel: [5, 15], bills: [40, 60] };

let newObj = {};
for (let [key, value] of Object.entries(input)) {
  let sum = 0;
  value.forEach((x) => {
    sum = sum + x;
  });
  newObj[key] = sum;
}
console.log(newObj);

// Todo: Count word occurrences in array
// Input:
// ["apple", "banana", "apple", "orange", "banana", "apple"]

// Output:
// { apple: 3, banana: 2, orange: 1 }

const arr1 = ["apple", "banana", "apple", "orange", "banana", "apple"];

let finalObj = {};

arr1.forEach((x) => {
  finalObj[x] = (finalObj[x] || 0) + 1;
});

console.log(finalObj);

// Todo: Question 3: Swap keys and values of object
// Input:
// { a: "x", b: "y", c: "z" }

// Output:
// { x: "a", y: "b", z: "c" }

const obj3 = { a: "x", b: "y", c: "z" };
const swapObj = {};

for (let [key, value] of Object.entries(obj3)) {
  swapObj[value] = key;
}
console.log(swapObj);

// Todo: Question 4: Find the largest value key
// Input:
// { a: 10, b: 50, c: 20 }
// Output: b

const obj4 = { a: 10, b: 50, c: 20 };
let largest = -Infinity;
let largestKey;
for (let [key, value] of Object.entries(obj4)) {
  if (largest < value) {
    largest = value;
    largestKey = key;
  }
}
console.log(largestKey);

// Todo Question 5: Flatten object of arrays into one array
// Input:
// { fruits: ["apple", "banana"], veggies: ["carrot", "pea"] }

// Output:
// ["apple", "banana", "carrot", "pea"]

const obj5 = { fruits: ["apple", "banana"], veggies: ["carrot", "pea"] };

const flat = Object.values(obj5).flat();
console.log(flat);

// Todo Question 6: Group people by city
// Input:
// [
//    { name: "A", city: "Delhi" },
//    { name: "B", city: "Mumbai" },
//    { name: "C", city: "Delhi" }

// ]

// Output:

// { Delhi: ["A", "C"], Mumbai: ["B"] }

// const arr6 = [
//   { name: "A", city: "Delhi" },
//   { name: "B", city: "Mumbai" },
//   { name: "C", city: "Delhi" },
// ];

// const group = {
//   [arr6[0].city]: [arr6[0].name],
// };
// arr6.map((city) => {
//   console.log(city.city);
//   if (Object.keys(group).includes(city.city)) {

//   }
// });

// Todo: Question 7: Filter object by values > 50
// Input:
// { a: 20, b: 60, c: 40, d: 90 }

// Output:
// { b: 60, d: 90 }

const obj7 = { a: 20, b: 60, c: 40, d: 90 };
const newObj7 = {};
for (let [key, value] of Object.entries(obj7)) {
  if (value > 50) {
    newObj7[key] = value;
  }
}
console.log(newObj7);

// Todo Question 8: Find student with highest average mark
// Input:
// { A: [80, 90], B: [70, 75, 85] }

// Output: A

const obj8 = { A: [80, 90], B: [70, 75, 85] };

let highestAverageMarks = -Infinity;
let studentWithHighestAverage = "";
for (let [key, value] of Object.entries(obj8)) {
  let sum = 0;
  let average;
  value.forEach((x) => {
    sum = sum + x;
  });
  average = sum / value.length;
  if (average > highestAverageMarks) {
    highestAverageMarks = average;
    studentWithHighestAverage = key;
  }
}
console.log(studentWithHighestAverage);

// Todo: Question 9: Unique values across all object arrays
// Input:
//  { x: [1,2,3], y: [2,3,4], z: [4,5] }

// Output:
// [1,2,3,4,5]

const obj9 = { x: [1, 2, 3], y: [2, 3, 4], z: [4, 5] };

const arr9 = [];

(Object.values(obj9)
  .flat()
  .forEach((x) => {
    if (!arr9.includes(x)) {
      arr9.push(x);
    }
  }),
  console.log(arr9));

//   Alternative solution

const unique = [...new Set(Object.values(obj9).flat())];
console.log(unique);

// Todo Question 10: Pick only given keys from object
// Input:

// { name: "Rahul", age: 23, city: "Noida" }, ["name","city"]

// Output:

// { name: "Rahul", city: "Noida" }

const obj10 = { name: "Rahul", age: 23, city: "Noida" };
const keys = ["name", "city"];

let newObj10 = {};
for (let [key, value] of Object.entries(obj10)) {
  if (keys.includes(key)) {
    newObj10[key] = value;
  }
}

console.log(newObj10);

// Alternate solution

newObj10 = Object.fromEntries(
  Object.entries(obj10).filter(([key]) => keys.includes(key)),
);
console.log(newObj10);

// Todo 11: 8th repeated

// Todo Question 12: Sort object entries by values (ascending)
// - Input:

// { a: 3, b: 1, c: 2 }

// - Output:

// [["b",1], ["c",2], ["a",3]]

// const obj12 = { a: 3, b: 1, c: 2 };
// let sortedObjects ={}
// for(let[key, value] of Object.entries(obj12)){
// if(value)
// }
// console.log(sortedObjects);

// Todo: Question 13: Count number of keys in object
// Input:

// { a: 1, b: 2, c: 3 }

// - Output:

// 3
const obj13 = { a: 1, b: 2, c: 3 };
const keyCount = Object.keys(obj13).length;
console.log(keyCount);

// Todo Question 14: Capitalize string values inside object
// - Input:

// { name: "alice", city: "delhi" }

// - Output:

// { name: "Alice", city: "Delhi" }

const obj14 = { name: "alice", city: "delhi" };
const capitalizeObj = {};
for (let [key, value] of Object.entries(obj14)) {
  value = value.charAt(0).toUpperCase() + value.slice(1);
  capitalizeObj[key] = value;
}

console.log(capitalizeObj);

// Todo Question 15:  Convert object to query string
// - Input:

// { name: "Alice", age: 25 }

// - Output:

// "name=Alice&age=25"

const obj15 = { name: "Alice", age: 25 };
let queryString = "";
for (let [key, value] of Object.entries(obj15)) {
  if (queryString) queryString += "&";
  queryString = queryString + key + "=" + value;
}

console.log(queryString);

//Todo: Question 16: Count even and odd numbers in array
// - Input:

// [1,2,3,4,5,6]

// - Output:

// { even: 3, odd: 3 }

const arr16 = [1, 2, 3, 4, 5, 6];
let odd = 0;
let even = 0;

arr16.forEach((x) => {
  if (x % 2 === 0) {
    even += 1;
  } else {
    odd += 1;
  }
});
const newObj16 = { even, odd };
console.log(newObj16);

// Todo: Question 17: Find common keys between two objects
// - Input:

// { a: 1, b: 2, c: 3 }, { b: 4, c: 5, d: 6 }

// - Output:

// ["b","c"]

const obj17a = { a: 1, b: 2, c: 3 };
const obj17b = { b: 4, c: 5, d: 6 };

const obj17aKeys = Object.keys(obj17a);
let arr17 = [];
for (let [key, value] of Object.entries(obj17b)) {
  if (obj17aKeys.includes(key)) {
    arr17.push(key);
  }
}
console.log(arr17);

// Todo 18: Convert array of objects to lookup by id
// - Input:

// [{ id: 1, name: "A" }, { id: 2, name: "B" }]

// - Output:

// { 1: { id:1, name:"A" }, 2: { id:2, name:"B" } }

const arr18 = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
];
let lookupObj = {};
for (let i = 1; i <= arr18.length; i++) {
  lookupObj[arr18[i - 1].id] = arr18[i - 1];
}
console.log(lookupObj);

// Todo: 19 Question 19: Check if all values in object are numbers
// - Input:

// { a: 1, b: "hello", c: 3 }

// - Output:

// false;

// const obj19 = { a: 1, b: 8, c: 3 };

// for (let value in Object.entries(obj19)) {
//   if (Number(value) !== value) {
//     console.log("false");
//   } else {
//     console.log("true");
//   }
// }
