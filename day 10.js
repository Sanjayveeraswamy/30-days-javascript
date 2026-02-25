const emptySet = new Set();
console.log(emptySet);

const numSet = new Set();

for (let i = 0; i <= 10; i++) {
  numSet.add(i);
}

console.log(numSet);

numSet.delete(5);
console.log(numSet);

numSet.clear();
console.log(numSet);

const countries = ['Finland', 'Sweden', 'Norway'];

const countrySet = new Set(countries);
console.log(countrySet);

const countryMap = new Map();

countries.forEach(country => {
  countryMap.set(country, country.length);
});

console.log(countryMap);

const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];

const setA = new Set(a);
const setB = new Set(b);

const intersection = new Set(
  [...setA].filter(num => setB.has(num))
);
console.log(intersection);

const difference = new Set(
  [...setA].filter(num => !setB.has(num))
);
console.log(difference);

import countriesData from './countries.js';

const allLanguages = [];

countriesData.forEach(country => {
  allLanguages.push(...country.languages);
});

const uniqueLanguages = new Set(allLanguages);

console.log(uniqueLanguages.size);

const mostSpokenLanguages = (countries, topN) => {
  const languageCount = {};

  countries.forEach(country => {
    country.languages.forEach(lang => {
      if (languageCount[lang]) {
        languageCount[lang]++;
      } else {
        languageCount[lang] = 1;
      }
    });
  });

  const sorted = Object.entries(languageCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, topN);

  return sorted.map(([lang, count]) => ({ [lang]: count }));
};