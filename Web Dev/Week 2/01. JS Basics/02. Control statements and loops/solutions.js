// TODO: Question-1 :   WAP that checks if a variable x is greater than 10. If it is, log "x is greater than 10," otherwise, log "x is not greater than 10."

console.log("QUESTION: 1");

let x = prompt("Enter a number to check wheather it is greater than 10 or not");

if (x > 10) {
  console.log(`${x} is greater than 10`);
} else {
  console.log(`${x} is not greater than 10`);
}

// TODO: Question-2 :   WAP that check that if an user is illegible for drive a car or not ( take user age as input).
console.log("QUESTION: 2");

let age = prompt("Enter the age to check if eligible for driving or not");

if (age >= 18) {
  console.log("Eligible to drive a car");
} else {
  console.log("Not Eligible to drive a car, stick to bicycle🤣🤣");
}

// TODO:Question-3:    WAP to assign grade for a student For example, if the score is between 90 and 100, assign the grade "A.", (take score of every subject as input).
console.log("QUESTION: 3");

let maths = prompt("Enter the marks scored in Maths");
let physics = prompt("Enter the marks scored in Physics");
let biology = prompt("Enter the marks scored in Biology");
let chemistry = prompt("Enter the marks scored in Chemistry");

// if (maths >= 90 && maths < 100) {
//   console.log("Mathematics = Grade A");
// } else if (maths >= 80 && maths < 90) {
//   console.log("Mathematics = Grade B");
// } else if (maths >= 70 && maths < 80) {
//   console.log("Mathematics = Grade C");
// } else if (maths >= 60 && maths < 70) {
//   console.log("Mathematics = Grade D");
// } else if (maths >= 50 && maths < 60) {
//   console.log("Mathematics = Grade E");
// } else {
//   console.log("Mathematics = Fail");
// }

// if (physics >= 90 && physics < 100) {
//   console.log("Physics = Grade A");
// } else if (physics >= 80 && physics < 90) {
//   console.log("Physics = Grade B");
// } else if (physics >= 70 && physics < 80) {
//   console.log("Physics = Grade C");
// } else if (physics >= 60 && physics < 70) {
//   console.log("Physics = Grade D");
// } else if (physics >= 50 && physics < 60) {
//   console.log("Physics = Grade E");
// } else {
//   console.log("Physics = Fail");
// }

// if (chemistry >= 90 && chemistry < 100) {
//   console.log("Chemistry = Grade A");
// } else if (chemistry >= 80 && chemistry < 90) {
//   console.log("Chemistry = Grade B");
// } else if (chemistry >= 70 && chemistry < 80) {
//   console.log("Chemistry = Grade C");
// } else if (chemistry >= 60 && chemistry < 70) {
//   console.log("Chemistry = Grade D");
// } else if (chemistry >= 50 && chemistry < 60) {
//   console.log("Chemistry = Grade E");
// } else {
//   console.log("Chemistry = Fail");
// }

// if (biology >= 90 && biology < 100) {
//   console.log("Biology = Grade A");
// } else if (biology >= 80 && biology < 90) {
//   console.log("Biology = Grade B");
// } else if (biology >= 70 && biology < 80) {
//   console.log("Biology = Grade C");
// } else if (biology >= 60 && biology < 70) {
//   console.log("Biology = Grade D");
// } else if (biology >= 50 && biology < 60) {
//   console.log("Biology = Grade E");
// } else {
//   console.log("Biology = Fail");
// }

// A more modular code

let subjectCount = 1;

while (subjectCount <= 4) {
  let subjectName;
  let subjectScore;
  if (subjectCount === 1) {
    subjectScore = maths;
    subjectName = "Mathematics";
  } else if (subjectCount === 2) {
    subjectScore = physics;
    subjectName = "Physics";
  } else if (subjectCount === 3) {
    subjectScore = biology;
    subjectName = "Biology";
  } else {
    subjectScore = chemistry;
    subjectName = "Chemistry";
  }

  if (subjectScore >= 90 && subjectScore < 100) {
    console.log(subjectName + " " + "=" + " " + "Grade A");
  } else if (subjectScore >= 80 && subjectScore < 90) {
    console.log(subjectName + " " + "=" + " " + "Grade B");
  } else if (subjectScore >= 70 && subjectScore < 80) {
    console.log(subjectName + " " + "=" + " " + "Grade C");
  } else if (subjectScore >= 60 && subjectScore < 70) {
    console.log(subjectName + " " + "=" + " " + "Grade D");
  } else if (subjectScore >= 50 && subjectScore < 60) {
    console.log(subjectName + " " + "=" + " " + "Grade E");
  } else {
    console.log(subjectName + " " + "=" + " " + "Fail");
  }
  subjectCount++;
}

// TODO:Question-4:   WAP to check  time of day based on the current hour. For example, if it's before noon, log "Good morning.". (take time as an input).
console.log("QUESTION: 4");

const time = Number(prompt("Enter current time in 24 hour format"));

if (time >= 0 && time < 12) {
  console.log("Good Morning, it's morning time");
} else if (time >= 12 && time < 16) {
  console.log("Good After noon");
} else if (time >= 4 && time < 20) {
  console.log("Good Evening");
} else if (time >= 20 && time < 24) {
  console.log("Good Night, its sleeping time");
} else {
  console.log("Enter a valid time between 0-23");
}

// TODO:Question-5:   WAP using Switch-case to display day name according to number, for eg: 1 => Sunday. (take a number as input).
console.log("QUESTION: 5");

let dayNumber = Number(prompt("Enter the day number"));

switch (dayNumber) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Enter a valid number between 1-7");
}

// TODO:Question-6:   WAP using Switch-case to display month name according to number, for eg: 1 => January. (take a number as input).
console.log("QUESTION: 6");

let monthNumber = Number("Enter a month number to know which month is it");

switch (monthNumber) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("August");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("October");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("December");
    break;
  default:
    console.log("Enter a valid number from 1-12");
}
// TODO: Question-7:   Implement a switch case statement to determine the type of fruit based on a variable. Handle at least three different fruit options.
console.log("QUESTION: 7");

let taste = prompt(
  "Choose the taste of fruit from citrus, sweet, tangy ",
).toLowerCase();

switch (taste) {
  case "citrus":
    console.log("Lemon");
    break;
  case "sweet":
    console.log("Apple");
    break;
  case "tangy":
    console.log("Orange");
    break;
  default:
    console.log("I don't know about this taste");
}

// TODO: Question-8:   WAP to categorize a given temperature into "low," "medium," or "high" ranges.
console.log("QUESTION: 8");
let temperature = Number(prompt("Enter the temperature in degree celsius"));

if (temperature < 15) {
  console.log("Low");
} else if (temperature >= 20 && temperature <= 35) {
  console.log("Medium");
} else {
  console.log("High");
}

// TODO: Question-9:   WAP that classifies a number as positive, negative, even, or odd.
console.log("QUESTION: 9");
const number = Number(
  prompt("Enter a number to classify as even, odd, positive or negative"),
);

if (number % 2 === 0) {
  console.log("Even");
  if (number < 0) {
    console.log("Negative");
  } else {
    console.log("Positive");
  }
} else {
  console.log("Odd");
  if (number < 0) {
    console.log("Negative");
  } else {
    console.log("Positive");
  }
}
// TODO: Question-10:  WAP to validate a username. If the username is less than 6 characters, log "Username too short"; if it's more than 15 characters, log "Username too long"; otherwise, log "Username accepted."

console.log("QUESTION: 10");

const username = prompt("Enter the name of the User");

if (username.length < 6) {
  console.log("Username too short");
} else if (username > 15) {
  console.log("username too long");
} else {
  console.log("username accepted");
}
