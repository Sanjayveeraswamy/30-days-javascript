let firstname = 'sanjay'
console.log(firstname)
let lastName = 'veera swamy'
let country = 'india'
let city = 'bapatla'
let age = 25
let isMarried = true
let year = 2020
console.log(firstname,lastName, country, city, age, isMarried, year)
console.log(10 == '10')
console.log('sanjay' === 2)

console.log(4>3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 !== '4')
console.log(4 == '4')
console.log(4 === '4')

console.log('python'.length == 'jargon'.length)

constcheck = 4 > 3 && 10 < 12
constcheck = 4 > 3 && 10 > 12


const now = new Date();

console.log(now.getFullYear());     // year
console.log(now.getMonth() + 1);    // month (0-11 so +1)
console.log(now.getDate());         // date
console.log(now.getDay());          // day (0=Sunday)
console.log(now.getHours());        // hours
console.log(now.getMinutes());      // minutes
console.log(now.getTime());         // milliseconds since 1970

// seconds since 1970
console.log(Math.floor(now.getTime() / 1000));

let base = prompt("Enter base:");
let height = prompt("Enter height:");

let area = 0.5 * base * height;
console.log("The area of triangle is",area);

let a = Number(prompt("Enter side a:"));
let b = Number(prompt("Enter side b:"));
let c = Number(prompt("Enter side c:"));

console.log("The perimeter of the triangle is", a + b + c);

let length = Number(prompt("Enter length:"));
let width = Number(prompt("Enter width:"));

console.log("Area:", length * width);
console.log("Perimeter:", 2 * (length + width));

let r = Number(prompt("Enter radius:"));
let pi = 3.14;

console.log("Area:", pi * r * r);
console.log("Circumference:", 2 * pi * r);

let now1 = new Date();

let year1 = now.getFullYear();
let month = String(now.getMonth() + 1).padStart(2, '0');
let date = String(now.getDate()).padStart(2, '0');
let hours = String(now.getHours()).padStart(2, '0');
let minutes = String(now.getMinutes()).padStart(2, '0');

console.log(`${year}-${month}-${date} ${hours}:${minutes}`);
