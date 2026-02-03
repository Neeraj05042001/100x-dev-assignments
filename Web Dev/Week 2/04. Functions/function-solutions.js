//Todo: Question-1:  Write a function that takes a name as an argument and logs a greeting message to the console, like "Hello, [Name]!".

console.log("QUESTION 1");

const name = prompt("Enter your name please");
function greet(name) {
  console.log(`Hello, ${name}`);
}
greet(name);

//Todo: Question-2:  Write a function that takes two parameters, adds them together, and returns the result.
console.log("QUESTION 2");

const firstNumber = prompt("Enter a number to add");
const secondNumber = prompt("Enter another number to add");

function add(a, b) {
  console.log(`Sum = ${a + b}`);
}
add(firstNumber, secondNumber);

//Todo: Question-3:  Write a function that takes the current hour as a parameter and logs a different greeting message based on whether it's morning, afternoon, or evening.
console.log("QUESTION 3");

const time = Number(prompt("Enter the current time of the day"));

function timeOfDay(currenTime) {
  if (currenTime >= 0 && currenTime < 12) {
    console.log("Good Morning");
  } else if (currenTime >= 12 && currenTime < 16) {
    console.log("Good Evening");
  } else if (currenTime >= 16 && currenTime < 20) {
    console.log("Good Evening");
  } else if (currenTime >= 20 && currenTime < 24) {
    console.log("Good Night");
  } else {
    console.log("Invalid time entry");
  }
}

timeOfDay(time);
//Todo: Question-4:  Write a function that calculates and returns the area of a rectangle. The function should take the length and width as parameters.
console.log("QUESTION 4");

const length = Number(prompt("Enter the length of rectangle"));
const breadth = Number(prompt("Enter the breadth of the rectangle"));

function area(l, b) {
  const areaOfRectangle = l * b;
  console.log(areaOfRectangle);
}
area(length, breadth);
//Todo: Question-5:  Write a function that takes a base and an exponent as parameters and returns the result of raising the base to the exponent.
console.log("QUESTION 5");
const base = Number(prompt("Enter the base of the exponent"));
const power = Number(prompt("Enter the exponent of the base"));
function exponent(a, b) {
  const result = a ** b;
  console.log(`${a} to the power ${b} is: ${result}`);
}
exponent(base, power);
//Todo: Question-6:  Write a function that takes a number as a parameter and returns true if it's a prime number and false otherwise.
console.log("QUESTION 6");
const num1 = Number(
  prompt("Enter a number to check whether it is prime or not"),
);

function prime(a) {
  let count = 0;
  let factor = 0;
  for (i = 1; i <= a; i++) {
    if (a % i === 0) {
      count++;
    }
  }
  if (factor === 2) {
    return true;
  } else {
    return false;
  }
}

console.log(prime(num1));
//Todo: Question-7:  Write a function that has a local variable and another function that has a global variable. Demonstrate the difference between global and local scope.
console.log("QUESTION 7");
console.log(
  "When a function is having a local variable then it can be accessed only within inside the function but when any function is having a global variable then it be accessed and modified anywhere in the program",
);
//Todo: Question-8:  Write a function that returns another function. The inner function should have access to a variable from the outer function.
console.log("QUESTION 8");
function outer(inner) {
  console.log("Outer function executing");
  const me = "My name is Neeraj and this is value is taken from outer function";
  inner(me);
  console.log("Outer function end");
}
function inner(parameterfromOuter) {
  console.log(parameterfromOuter);
  console.log("Inner function execution ended");
}

outer(inner);
//Todo: Question-9:  Write a recursive function to calculate the factorial of a given number.
console.log("QUESTION 9");
const num2 = Number("Enter a number to find its factorial");
function factorial(a) {
  let factorial;
  for (let i = 1; i <= a; i++) {
    factorial = factorial * i;
  }
  return factorial;
}

console.log(factorial(num2));
//Todo: Question-10: Write two functions, and then compose them into a third function. For example, if f(x) = x + 2 and g(x) = 2x, then the composed function should be h(x) = f(g(x)).
console.log("QUESTION 10");

function f(x) {
  return x + 2;
}

function g(x) {
  return 2 * x;
}

function h(x) {
  return f(g(x));
}

console.log(h(5));


