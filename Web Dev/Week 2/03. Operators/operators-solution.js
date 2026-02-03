// Todo: Problem 1: Write a JavaScript program to perform arithmetic operations on two numbers (addition, subtraction, multiplication, division).

console.log("QUESTION: 01");

const firstNumber = Number(prompt("Enter the first number"));
const SecondNumber = Number(prompt("Enter the second number"));

const addition = firstNumber + SecondNumber;
const subtraction = firstNumber - SecondNumber;
const multiplication = firstNumber * SecondNumber;
const division = (firstNumber / SecondNumber).toFixed(2);

console.log("Addition = ", addition);
console.log("Subtraction = ", subtraction);
console.log("Multiplication = ", multiplication);
console.log("Division = ", division);
// Todo: Problem 2: Write a JavaScript program to demonstrate the use of assignment operators on variables.
console.log("QUESTION: 02");
const homework = prompt("Did the student completed homework say yes or no");
const bonus = prompt("Did the student completed homework say yes or no");
const penalty = prompt("Did the student completed homework say yes or no");
const extra = prompt("Did the student completed homework say yes or no");

let initialScore = 0;

if (homework === "yes") {
  initialScore += 10;
} else {
  initialScore += 0;
}
console.log("After homework final score = ", initialScore);
if (bonus === "yes") {
  initialScore *= 2;
} else {
  initialScore = initialScore * 1;
}
console.log("After bonus final score = ", initialScore);
if (penalty === "yes") {
  initialScore -= 5;
} else {
  initialScore -= 0;
}
console.log("After penalty final score = ", initialScore);

// Todo: Problem 3: Write a JavaScript program to compare two numbers and log whether they are equal, greater, or lesser.
console.log("QUESTION: 03");
const num1 = Number(prompt("Enter the first number to compare"));
const num2 = Number(prompt("Enter the second number to compare"));

if (num1 > num2) {
  console.log(num1, "is greater");
  console.log(num2, "is lesser");
} else if (num1 < num2) {
  console.log(num2, "is greater");
  console.log(num1, "is lesser");
} else {
  console.log("Both are equal");
}

// Todo: Problem 4: Write a JavaScript program to demonstrate logical operators in a conditional statement.
console.log("QUESTION: 04");
// Task: Create a program that checks if a person can buy a movie ticket based on multiple conditions using logical operators (&&, ||, !):
// Rules:

// Person must be at least 13 years old AND have at least $15
// OR person can be accompanied by an adult (any age, but needs $15)
// For R-rated movies: must be 18+ OR (13-17 AND with parent permission)
// Special discount: If person is NOT a student, ticket costs $20 instead of $15

// Input (use prompt):

// Age
// Money available
// Has adult companion? (yes/no)
// Is student? (yes/no)
// Wants R-rated movie? (yes/no)
// Has parent permission? (yes/no)

const age = Number(prompt("Enter the age of person"));
const money = Number(prompt("Enter the money available"));
const hasAdultCompanion = prompt("Enter yes if person has a companion else no");
const isStudent = prompt("Are you a student");
const rRated = prompt("Do you want R rated movie?");
const hasParentPermission = prompt("Do you have your parents permission");
let companion;
let permission;
let student;
if (hasAdultCompanion === "yes") {
  companion = true;
} else if (hasAdultCompanion === "no") {
  companion = false;
} else {
  console.log("Enter a valid companion answer either yes or no");
}
if (hasParentPermission === "yes") {
  permission = true;
} else if (hasParentPermission === "no") {
  permission = false;
} else {
  console.log("Enter a valid parent permission answer either yes or no");
}
if (isStudent === "yes") {
  student = true;
} else if (isStudent === "no") {
  student = false;
} else {
  console.log("Enter a valid answer for student  either yes or no");
}

console.log("Age: ", age);
console.log("Money: ", money);
console.log("Adult Companion: ", hasAdultCompanion);
console.log("Student: ", isStudent);
console.log("R-Rated: ", rRated);
console.log("Parent Permission: ", hasParentPermission);

if ((age >= 13 && money >= 15) || (hasAdultCompanion && money >= 15)) {
  console.log("You can buy a ticket");
}

if (age >= 18 || (age >= 13 && age <= 17 && hasParentPermission)) {
  console.log("Allowed for R-Rated movie");
}

if (!student) {
  console.log("Ticket Price: $20");
} else {
  console.log("Ticket Price: $15 (student rate)");
}
// Todo: Problem 5: Write a JavaScript program to perform bitwise operations on two numbers.
console.log("QUESTION: 05");
// Todo: Problem 6: Write a JavaScript program to use the ternary operator to determine the larger of two numbers.
console.log("QUESTION: 06");
const fNumber = Number(prompt("Enter the first number"));
const sNumber = Number(prompt("Enter the second number"));

const larger =
  fNumber > sNumber ? `${fNumber} is larger` : `${sNumber} is larger`;

console.log(larger);

// Todo: Problem 7: Write a JavaScript program to demonstrate type operators on different data types.
console.log("QUESTION: 07");
let type1 = "Neeraj";
let type2 = 4;
let type3 = false;
console.log(typeof type1);
console.log(typeof type2);
console.log(typeof type3);
// Todo: Problem 8: Write a JavaScript program to use string operators to concatenate two strings.
console.log("QUESTION: 08");
let str1 = prompt("Enter a string");
let str2 = prompt("Enter another string");
console.log(str1 + " " + str2);
// Todo: Problem 9: Write a JavaScript program to demonstrate the use of the typeof operator on different variables.
console.log("QUESTION: 09");
const name = "Neeraj";
const age2 = "24";
const student2 = true;
let healthy;
const nothing = null;
const obj = {
  name: "neeraj",
  age: 23,
};

const arr = [1, 4, 5];

function abc() {
  console.log("hii");
}

console.log(`variable: name , value: ${name}, Type: ${typeof name}`);
console.log(`variable: age , value: ${age}, Type: ${typeof age}`);
console.log(
  `variable: student2 , value: ${student2}, Type: ${typeof student2}`,
);
console.log(`variable: healthy , value: ${healthy}, Type: ${typeof healthy}`);
console.log(`variable: nothing , value: ${nothing}, Type: ${typeof nothing}`);
console.log(`variable: obj , value: ${obj}, Type: ${typeof obj}`);
console.log(`variable: arr , value: ${arr}, Type: ${typeof arr}`);

// Todo: Problem 10: Write a JavaScript program to use the in operator to check if a property exists in an object.
console.log("QUESTION: 10");
const student3 = {
  name: "Neeraj",
  age: 24,
  grade: "A",
  subject: ["Maths", "Physics", "Chemistry"],
  isActive: true,
};

if ("name" in student3) {
  console.log("name exists");
} else {
  console.log("doesn't exist");
}

if ("age" in student3) {
  console.log("age exists");
} else {
  console.log("doesn't exist");
}

if ("email" in student3) {
  console.log("email exists");
} else {
  console.log("doesn't exist");
}

if ("phone" in student3) {
  console.log("phone exists");
} else {
  console.log("doesn't exist");
}

if ("grade" in student3) {
  console.log("grade exists");
} else {
  console.log("doesn't exist");
}

if ("address" in student3) {
  console.log("address exists");
} else {
  console.log("doesn't exist");
}
