// Todo: WAP that logs numbers from 1 to 10 to the console.
console.log("QUESTION: 1");
for (let i = 1; i <= 1; i++) {
  console.log(i);
}
// Todo: WAP that log all even numbers from 2 to 20.
console.log("QUESTION: 2");
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
// Todo: WAP that counts backward from 10 to 1 and logs the values.
console.log("QUESTION: 3");
for (let i = 10; i > 0; i--) {
  console.log(i);
}
// Todo: WAP to calculate the sum of numbers from 1 to 5.
console.log("QUESTION: 4");
let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum = sum + i;
}
console.log(sum);
// Todo:  WAP that prints powers of 2 (2^n) up to 64.
console.log("QUESTION: 5");
for (let i = 1; i <= 64; i++) {
  const result = 2 ** i;
  console.log(result);
}
// Todo: WAP to Develop a do-while loop for a simple number guessing game. Ask the user to guess a number between 1 and 10, and keep prompting until they guess correctly.
console.log("QUESTION: 6");
const random = Math.floor(Math.random() * 10) + 1;
let guess;
do {
  guess = Number(prompt("Guess a number between 1 t0 10"));
  if (guess === random) {
    console.log("Congratulations, You won");
  } else {
    console.log("Oops! Try again");
  }
} while (guess !== random);
// Todo: WAP to display the multiplication table (1 to 10) in the console.
console.log("QUESTION: 7");
for (let i = 1; i < 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
// Todo: WAP that use the break statement to exit the loop when the counter reaches 5. Also, use continue to skip printing the value 3 ( Note : Loop Starts from 0).
console.log("QUESTION: 8");
let count = 0;
for (let i = 0; i <= 10; i++) {
  count = count + 1;
  if (count === 3) {
    continue;
  } else if (count === 5) {
    break;
  } else {
    console.log();
  }
}
// Todo: WAP that logs numbers from 1 to 30. For multiples of 3, log "Fizz" instead of the number, and for multiples of 5, log "Buzz." For numbers which are multiples of both 3 and 5, log "FizzBuzz."
console.log("QUESTION: 9");

for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("Fizz");
  } else if (i % 3 === 0) {
    console.log("Buzz");
  } else if (i % 5 === 0) {
    console.log("FizzBuzz");
  } else {
    console.log(i);
  }
}
// Todo: WAP to identify and log prime numbers within a given range.
console.log("QUESTION: 10");
const n = Number(
  prompt("Enter a range between which you want to know the prime numbers"),
);

for (let i = 1; i <= n; i++) {
  let factors = 0;
  for (let j = 1; j <= i; j++) {
    if (i % j === 0) {
      factors = factors + 1;
    }
  }
  if (factors === 2) {
    console.log(i, "is a Prime");
  }
}
