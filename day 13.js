const countries = ['Finland', 'Sweden', 'Norway', 'Denmark'];

console.table(countries);

const countriesObj = [
  { name: 'Finland', capital: 'Helsinki', population: 5500000 },
  { name: 'Sweden', capital: 'Stockholm', population: 10000000 },
  { name: 'Norway', capital: 'Oslo', population: 5400000 }
];

console.table(countriesObj);

console.group('Countries Info');
console.log('Finland');
console.log('Sweden');
console.log('Norway');
console.groupEnd();

console.assert(10 > 2 * 10, 'Assertion failed: 10 is not greater than 20');

console.warn('This is a warning message!');



console.error('This is an error message!');

const arr = Array.from({ length: 1000000 }, (_, i) => i);

// While loop
console.time('while loop');
let i = 0;
while (i < arr.length) {
  i++;
}
console.timeEnd('while loop');

// For loop
console.time('for loop');
for (let i = 0; i < arr.length; i++) {}
console.timeEnd('for loop');

// For...of loop
console.time('for...of loop');
for (const num of arr) {}
console.timeEnd('for...of loop');

// forEach loop
console.time('forEach loop');
arr.forEach(() => {});
console.timeEnd('forEach loop');    