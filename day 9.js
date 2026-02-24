arr.forEach(item => console.log(item))


arr.map(item => item * 2)


arr.filter(item => item > 5)

arr.reduce((acc, val) => acc + val, 0)

function printItem(item) {
  console.log(item);
}


countries.forEach(printItem);
names.forEach(printItem);
numbers.forEach(printItem);

// Uppercase countries
const upperCountries = countries.map(country => country.toUpperCase());

// Countries length
const countryLengths = countries.map(country => country.length);

// Square numbers
const squaredNumbers = numbers.map(num => num * num);

// Uppercase names
const upperNames = names.map(name => name.toUpperCase());

// Product prices
const prices = products.map(p => p.price);


// Countries containing 'land'
const landCountries = countries.filter(c => c.toLowerCase().includes('land'));

// Countries with 6 characters
const sixCharCountries = countries.filter(c => c.length === 6);

// Countries with 6 or more letters
const sixPlusCountries = countries.filter(c => c.length >= 6);

// Countries starting with 'E'
const startWithE = countries.filter(c => c.startsWith('E'));

// Only valid prices
const validPrices = products.filter(p => p.price !== '' && p.price !== ' ');


function getStringLists(arr) {
  return arr.filter(item => typeof item === 'string');
}


// Sum of numbers
const sum = numbers.reduce((acc, num) => acc + num, 0);

// Concatenate countries sentence
const sentence = countries.reduce((acc, curr, index) => {
  if (index === countries.length - 1) {
    return acc + 'and ' + curr + ' are north European countries';
  }
  return acc + curr + ', ';
}, '');


const totalPrice = products
  .map(p => Number(p.price))           // convert to number
  .filter(price => !isNaN(price) && price > 0)
  .reduce((acc, price) => acc + price, 0);

console.log(totalPrice);


const total = products.reduce((acc, p) => {
  const price = Number(p.price);
  return !isNaN(price) && price > 0 ? acc + price : acc;
}, 0);

console.log(total);

function categorizeCountries(countries, pattern = 'land') {
  return countries.filter(country =>
    country.toLowerCase().includes(pattern.toLowerCase())
  );
}

function countInitialLetters(countries) {
  const result = countries.reduce((acc, country) => {
    const firstLetter = country[0].toUpperCase();
    acc[firstLetter] = (acc[firstLetter] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(result).map(([letter, count]) => ({
    letter,
    count
  }));
}

const getFirstTenCountries = countries => countries.slice(0, 10);

const getFirstTen = countries.filter((_, i) => i < 10);

const getLastTenCountries = countries => countries.slice(-10);

function mostFrequentInitial(countries) {
  const counts = countries.reduce((acc, country) => {
    const letter = country[0];
    acc[letter] = (acc[letter] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(counts).reduce((max, curr) =>
    curr[1] > max[1] ? curr : max
  );
}

// By name
countries.sort((a, b) => a.name.localeCompare(b.name));

// By capital
countries.sort((a, b) => a.capital.localeCompare(b.capital));

// By population
countries.sort((a, b) => a.population - b.population);

function mostSpokenLanguages(countries, topN) {
  const langCount = {};

  countries.forEach(country => {
    country.languages.forEach(lang => {
      langCount[lang] = (langCount[lang] || 0) + 1;
    });
  });

  return Object.entries(langCount)
    .map(([language, count]) => ({ country: language, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, topN);
}

function mostPopulatedCountries(countries, topN) {
  return countries
    .map(c => ({ country: c.name, population: c.population }))
    .sort((a, b) => b.population - a.population)
    .slice(0, topN);
}

const statistics = {
  data: ages,

  count() {
    return this.data.length;
  },

  sum() {
    return this.data.reduce((a, b) => a + b, 0);
  },

  min() {
    return Math.min(...this.data);
  },

  max() {
    return Math.max(...this.data);
  },

  range() {
    return this.max() - this.min();
  },

  mean() {
    return Math.round(this.sum() / this.count());
  },

  median() {
    const sorted = [...this.data].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted[mid];
  },

  mode() {
    const freq = {};
    this.data.forEach(num => freq[num] = (freq[num] || 0) + 1);

    let max = 0, mode;

    for (let key in freq) {
      if (freq[key] > max) {
        max = freq[key];
        mode = key;
      }
    }

    return { mode: Number(mode), count: max };
  },

  var() {
    const mean = this.mean();
    return this.data.reduce((acc, num) => acc + (num - mean) ** 2, 0) / this.count();
  },

  std() {
    return Math.sqrt(this.var()).toFixed(1);
  },

  freqDist() {
    const freq = {};
    this.data.forEach(num => freq[num] = (freq[num] || 0) + 1);

    return Object.entries(freq)
      .map(([num, count]) => [(count / this.count()) * 100, Number(num)])
      .sort((a, b) => b[0] - a[0]);
  },

  describe() {
    return `
Count: ${this.count()}
Sum: ${this.sum()}
Min: ${this.min()}
Max: ${this.max()}
Range: ${this.range()}
Mean: ${this.mean()}
Median: ${this.median()}
Mode: (${this.mode().mode}, ${this.mode().count})
Variance: ${this.var()}
Standard Deviation: ${this.std()}
Frequency Distribution: ${JSON.stringify(this.freqDist())}
`;
  }
};