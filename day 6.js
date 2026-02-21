for(let i = 0; i <= 10; i++){
  console.log(i)
}

let i = 10;
while(i<=11){
    i++;
    console.log(i)
}

let j =0;
do{
    console.log(j);
    j++
} while(j<=10)

for(let i =10;i>=0;i--){
    console.log(i)
}

let k=10
while(k>0){
    k--;
    console.log(k)
}
 let n = 49;
 for(let i=0;i<n;i++){
    console.log(i)
 }

 for (let i = 1; i <= 5; i++) {
  console.log('#'.repeat(i));
}

for (let i = 0; i <= 10; i++) {
  console.log(`${i} * ${i} = ${i * i}`);
}

for (let i = 0; i <= 10; i++) {
  console.log(`${i}    ${i*i}    ${i*i*i}`);
}

for(let i=0;i<=100;i++){
    if(i%2==0){
        console.log(i)
    }
}

for(let i=0;i<=100;i++){
    if(i%2==1){
        console.log(i)
    }
}

for (let i = 2; i <= 100; i++) {
  let isPrime = true;

  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(i);
  }
}

let sum = 0;

for (let i = 0; i <= 100; i++) {
  sum += i;
}

console.log("The sum of all numbers from 0 to 100 is", sum);

let evenSum = 0;
let oddSum = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    evenSum += i;
  } else {
    oddSum += i;
  }
}

console.log("The sum of all evens is", evenSum);
console.log("The sum of all odds is", oddSum);


let even = 0;
let odd = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    even += i;
  } else {
    odd += i;
  }
}

console.log([even, odd]);

let arr = [];

for (let i = 0; i < 5; i++) {
  arr.push(Math.floor(Math.random() * 100));

}

console.log(arr);

let uniqueArr = [];

while (uniqueArr.length < 5) {
  let num = Math.floor(Math.random() * 100);

  if (!uniqueArr.includes(num)) {
    uniqueArr.push(num);
  }
}

console.log(uniqueArr);

let chars = "abcdefghijklmnopqrstuvwxyz";
let id = "";

for (let i = 0; i < 6; i++) {
  let randomIndex = Math.floor(Math.random() * chars.length);
  id += chars[randomIndex];
}

console.log(id);


let chars1 = "abcdefghijklmnopqrstuvwxyz0123456789";
let length = Math.floor(Math.random() * 20) + 5; // random length
let id1 = "";

for (let i = 0; i < length; i++) {
  let index = Math.floor(Math.random() * chars.length);
  id1 += chars[index];
}

console.log(id1);

let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);

console.log(`rgb(${r},${g},${b})`);

let hex = "#";
let hexChars = "0123456789abcdef";

for (let i = 0; i < 6; i++) {
  hex += hexChars[Math.floor(Math.random() * 16)];
}

console.log(hex);

let red = Math.floor(Math.random() * 256);
let green = Math.floor(Math.random() * 256);
let black = Math.floor(Math.random() * 256);

console.log(`rgb(${red},${green},${black})`);


const countries = ['Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Iceland','Japan','Kenya'];

let upper = [];

for (let abs of countries) {
  upper.push(abs.toUpperCase());
}

console.log(upper);


let lengths = [];

for (let c of countries) {
  lengths.push(c.length);
}

console.log(lengths);

let result = [];

for (let c of countries) {
  result.push([c, c.slice(0,3).toUpperCase(), c.length]);
}

console.log(result);

let landCountries = [];

for (let c of countries) {
  if (c.includes('land')) {
    landCountries.push(c);
  }
}

if (landCountries.length > 0) {
  console.log(landCountries);
} else {
  console.log('All these countries are without land');
}

let iaCountries = [];

for (let c of countries) {
  if (c.endsWith('ia')) {
    iaCountries.push(c);
  }
}

if (iaCountries.length > 0) {
  console.log(iaCountries);
} else {
  console.log('These are countries ends without ia');
}

let longest = "";

for (let c of countries) {
  if (c.length > longest.length) {
    longest = c;
  }
}

console.log(longest);

let fiveChar = [];

for (let c of countries) {
  if (c.length === 5) {
    fiveChar.push(c);
  }
}

console.log(fiveChar);

const webTechs = ["HTML", "CSS", "JavaScript", "React", "Redux", "Node", "MongoDB"];

let longestTech = "";

for (let tech of webTechs) {
  if (tech.length > longestTech.length) {
    longestTech = tech;
  }
}

console.log(longestTech);

let techArr = [];

for (let tech of webTechs) {
  techArr.push([tech, tech.length]);
}

console.log(techArr);

const mernStack = ["MongoDB", "Express", "React", "Node"];

let acronym = "";

for (let tech of mernStack) {
  acronym += tech[0];
}

console.log(acronym); // MERN

const arr1 = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];

for (let item of arr1) {
  console.log(item);
}

let fruits = ['banana', 'orange', 'mango', 'lemon'];
let reversed = [];

for (let i = fruits.length - 1; i >= 0; i--) {
  reversed.push(fruits[i]);
}

console.log(reversed);

const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
];

for (let arr of fullStack) {
  for (let item of arr) {
    console.log(item.toUpperCase());
  }
}

let copy = [];

for (let c of countries) {
  copy.push(c);
}

let sortedCountries = copy.sort();
console.log(sortedCountries);

console.log(webTechs.sort());
console.log(mernStack.sort());

let revCap = [];

for (let i = countries.length - 1; i >= 0; i--) {
  revCap.push(countries[i].toUpperCase());
}

console.log(revCap);