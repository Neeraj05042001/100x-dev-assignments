// TODO 1: Input the distance in Kilometer and Convert into Meter and Centimeter.

const distance = Number(prompt("Enter the distance in kilometer"));

const distanceInMetre = distance * 1000;
const distanceInCentimetre = distance * 1000 * 100;

if (isNaN(distance)) {
  console.log("please input a valid distance");
} else {
  23;
  console.log(distanceInMetre + " " + "m");
  console.log(distanceInCentimetre + " " + "cm");
}

// TODO 2: WAP to input radius of a circle and log the area of circle.

const radius = Number(prompt("Please enter the radius of the circle"));

const area = Math.PI * radius * radius;

if (isNaN(radius) || radius <= 0) {
  console.log("Please Enter a valid radius");
} else {
  console.log(`Area of the circle with radius ${radius} is: ${area}`);
}

// Todo 3: WAP to input two numbers and perform arithmetic operations on those numbers.

const num1 = Number(prompt("Please Enter first number"));
const num2 = Number(prompt("Please Enter second number"));

if (isNaN(num1 || isNaN(num2))) {
  console.log("Please Enter a valid number");
} else if (num2 === 0) {
  console.log("Division and remainder with 0 will result in infinity");
} else {
  const add = num1 + num2;
  const difference = num1 - num2;
  const product = num1 * num2;
  const remainder = num1 % num2;
  const quotient = num1 / num2;

  console.log(`Addition of ${num1} and ${num2} is: ${add}`);
  console.log(`Difference of ${num1} and ${num2} is: ${difference}`);
  console.log(`Product of ${num1} and ${num2} is: ${product}`);
  console.log(`Remainder of ${num1} and ${num2} is: ${remainder}`);
  console.log(`Quotient of ${num1} and ${num2} is: ${quotient}`);
}

// TODO: WAP to calculate total marks in two subject and then calculate percentage.

const maths = Number(prompt("Enter the marks obtained in Maths"));
const physics = Number(prompt("Enter the marks obtained in Physics"));

if (isNaN(maths) || isNaN(physics)) {
  console.log("Please Enter valid marks");
} else {
  const total = maths + physics;
  const percentage = (total / 200) * 100;
  console.log(
    `Total marks obtained in these two subjects are: ${total} and the percentage scored is: ${percentage}%`,
  );
}

// Todo 5: WAP to input the length and breath of rectangle and calculate the area and perimeter of rectangle.

const length = Number(prompt("Enter the length of the rectangle"));
const breadth = Number(prompt("Enter the breadth of the rectangle"));

if (isNaN(length) || isNaN(breadth)) {
  console.log("Enter a valid length & breadth");
} else if (length <= 0 || breadth <= 0) {
  console.log("Length and breadth cannot be less than or equal to 0");
} else {
  const area = length * breadth;
  const perimeter = 2 * (length + breadth);
  console.log("Area of the rectangle is: ", area);
  console.log("Perimeter of the rectangle is: ", perimeter);
}

// Todo 6: WAP to input n numbers and log the average of those number.

const totalNumbers = Number(prompt("Enter the total no of numbers present"));
let numArray = [];
for (let i = 1; i <= totalNumbers; i++) {
  const numbers = Number(prompt(`Enter the ${i} number`));
  if (isNaN(numbers)) {
    console.log("Enter a valid number");
    i--;
  } else {
    numArray.push(numbers);
  }
}

let sum = 0;
for (let j = 0; j < numArray.length; j++) {
  sum = sum + numArray[j];
}

const average = sum / totalNumbers;

console.log(`Average of these ${totalNumbers} number is: ${average}`);

// Todo 7:  WAP to input the distance between two cities (in km) , convert and print this distance in meter, feet, inches, and centimeter.

const distance = Number(prompt("Enter the distance in km "));

if (isNaN(distance) || distance <= 0) {
  console.log("Please Enter a valid distance");
} else {
  const distanceInMetre = distance * 1000;
  const distanceInFeet = distance * 1000 * 3.28;
  const distanceInInches = distance * 1000 * 39.37;
  const distanceInCentimetre = distance * 1000 * 100;

  console.log("Distance in metre: ", distanceInMetre);
  console.log("Distance in feet: ", distanceInFeet);
  console.log("Distance in inches: ", distanceInInches);
  console.log("Distance in centimeter: ", distanceInCentimetre);
}

// Todo 8: WAP to input the temperature in Fahrenheit and convert this temperature in Centigrade.

const temperature = Number(
  prompt("Please Enter the temperature in Fahrenheit"),
);

if (isNaN(temperature)) {
  console.log("Please Enter a valid temperature value");
} else {
  const TempInCelsius = (temperature - 32) * (5 / 9);
  console.log("Temperature in Celsius is: ", TempInCelsius.toFixed(2));
}

// Todo 9: Input the quantity and rate of a product then calculate the amount. A discount of 10 % after then calculate discount amount and amount after discount.

const quantity = Number(prompt("Enter the quantity of the product"));
const rate = Number(prompt("Enter the rate of the product"));
if (isNaN(quantity) || isNaN(rate) || quantity <= 0 || rate < 0) {
  console.log("Enter the valid quantity and rate");
} else {
  const amount = rate * quantity;
  const discountAmount = 0.1 * amount;
  const finalAmount = amount - discountAmount;

  console.log("The Total Amount of all the products is: ", amount.toFixed(2));
  console.log("The discount offered is: ", discountAmount.toFixed(2));
  console.log(
    "The Final Amount to be paid for all these products is: ",
    finalAmount.toFixed(2),
  );
}

// Todo 10: Input principal amount, input rate of interest, input number of years, Then Calculate simple interest.

const principal = Number(prompt("Enter the principal amount"));
const rate = Number(prompt("Enter the rate of interest"));
const time = Number(prompt("Enter the time in years"));

if (
  isNaN(principal) ||
  isNaN(rate) ||
  isNaN(time) ||
  principal <= 0 ||
  rate <= 0 ||
  time <= 0
) {
  console.log("Please Enter valid principal, rate and time");
} else {
  const interest = (principal * rate * time) / 100;
  console.log("The interest is: ", interest.toFixed(2));
}
