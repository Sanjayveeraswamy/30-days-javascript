let age = 16;
age = Number(age);
if (age >= 18) {
  console.log("You are old enough to drive.");
} else {
  let yearsLeft = 18 - age;
  console.log(`You are left with ${yearsLeft} years to drive.`);
}

let myAge = 25; // you can change this
let yourAge = 76;

if (yourAge > myAge) {
  console.log(`You are ${yourAge - myAge} years older than me.`);
} else if (yourAge < myAge) {
  console.log(`I am ${myAge - yourAge} years older than you.`);
} else {
  console.log("We are the same age.");
}

let a = 4;
let b = 3;

if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} is less than ${b}`);
}

let result = a > b
  ? `${a} is greater than ${b}`
  : `${a} is less than ${b}`;

console.log(result);

let num = 324;

if (num % 2 === 0) {
  console.log(`${num} is an even number`);
} else {
  console.log(`${num} is an odd number`);
}

let score = 43;
if (score >= 80 && score <= 100) {
  console.log("Grade: A");
} else if (score >= 70) {
  console.log("Grade: B");
} else if (score >= 60) {
  console.log("Grade: C");
} else if (score >= 50) {
  console.log("Grade: D");
} else if (score >= 0) {
  console.log("Grade: F");
} else {
  console.log("Invalid score");
}

let month = 'october';

if (month === "september" || month === "october" || month === "november") {
  console.log("The season is Autumn.");
} else if (month === "december" || month === "january" || month === "february") {
  console.log("The season is Winter.");
} else if (month === "march" || month === "april" || month === "may") {
  console.log("The season is Spring.");
} else if (month === "june" || month === "july" || month === "august") {
  console.log("The season is Summer.");
} else {
  console.log("Invalid month");
}

let month2 = 'march';

let m = month2.toLowerCase();

let displaymonth = m.charAt(0).toUpperCase() + m.slice(1);

let days;

if (
  m === "january" || m === "march" || m === "may" ||
  m === "july" || m === "august" || m === "october" ||
  m === "december"
) {
  days = 31;
} else if (
  m === "april" || m === "june" ||
  m === "september" || m === "november"
) {
  days = 30;
} else if (m === "february") {
  days = 28;
} else {
  console.log("Invalid month");
}

if (days) {
  console.log(`${displaymonth} has ${days} days.`);
}
  





let month1 = 'february';
let year = 2024;

// normalize input
let m1 = month1.toLowerCase();

// capitalize for output
let displayMonth = month1.charAt(0).toUpperCase() + month1.slice(1);

let day;

// check leap year
let isLeap =
  (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

if (
  month1 === "january" || month1 === "march" || month1 === "may" ||
  month1 === "july" || month1 === "august" || month1 === "october" ||
  month1 === "december"
) {
  day = 31;
} else if (
  month1 === "april" || month1 === "june" ||
  month1 === "september" || month1 === "november"
) {
  day = 30;
} else if (month1 === "february") {
  day = isLeap ? 29 : 28;
} else {
  console.log("Invalid month");
}

if (days) {
  console.log(`${displayMonth} has ${day} days.`);
}


