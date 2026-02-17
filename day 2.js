let challenge =  '30 Days Of JavaScript.';
console.log(challenge);
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substring(3,7))
let challenge2 = ' viviu vi bv';
console.log(challenge2.substr(4))
console.log(challenge.includes('days'))
console.log(challenge.substring(0,2))
console.log(challenge.split(' '))
console.log(challenge.split())
let string = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(string.split(' '))
console.log(challenge.replace('JavaScript', 'python'))
console.log(challenge.charAt(15))
let index = challenge.indexOf('J')
console.log(challenge.charCodeAt(index))
let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'))
console.log(sentence.lastIndexOf('because'))
console.log(sentence.search('because'))
console.log(challenge.trim(' '))
console.log(challenge.startsWith('30'));  
console.log(challenge.endsWith('JavaScript.'));
console.log(challenge.match(/a/g));
let part1 = '30 Days Of';
let part2 = ' JavaScript';
console.log(part1.concat(part2));  
console.log(challenge.repeat(2));


console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");
console.log("\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"");
console.log(typeof '10' === typeof 10); 
let num = Number('10');
console.log(typeof num === typeof 10);
console.log(parseFloat('9.8') === 10);
let rounded = Math.round(parseFloat('9.8'));
console.log(rounded === 10);
console.log('python'.includes('on') && 'jargon'.includes('on')); 
console.log(Math.floor(Math.random() * 101));
console.log(Math.floor(Math.random() * 51) + 50);
console.log(Math.floor(Math.random() * 256));
let str = 'JavaScript';
let index1 = Math.floor(Math.random() * str.length);
console.log(str[index1]);
console.log("1 1 1 1 1");
console.log("2 1 2 4 8");
console.log("3 1 3 9 27");
console.log("4 1 4 16 64");
console.log("5 1 5 25 125");
let sentence1 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';

let countLove = sentence1.match(/love/gi);
console.log(countLove.length); // 3
let sentence2 = 'You cannot end a sentence with because because because is a conjunction';

let countBecause = sentence2.match(/because/g);
console.log(countBecause.length); // 3
let incomeText = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month';

// Extract numbers
let numbers = incomeText.match(/\d+/g).map(Number);

// Calculate
let monthlySalary = numbers[0];
let annualBonus = numbers[1];
let onlineMonthly = numbers[2];

let totalIncome = (monthlySalary * 12) + annualBonus + (onlineMonthly * 12);

console.log(totalIncome); // 370000
