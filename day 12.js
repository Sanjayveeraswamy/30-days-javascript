const totalIncome = 48000 + 10000 + 66000;
console.log(totalIncome);

const points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8'];

const numbers = points.map(Number);
const sorted = numbers.sort((a, b) => a - b);

const distance = sorted[sorted.length - 1] - sorted[0];

console.log(sorted);
console.log(distance); 

function is_valid_variable(name) {
  const pattern = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
  return pattern.test(name);
}

// Tests
console.log(is_valid_variable('first_name')); // true
console.log(is_valid_variable('first-name')); // false
console.log(is_valid_variable('1first_name')); // false
console.log(is_valid_variable('firstname')); // true

function tenMostFrequentWords(text, limit = 10) {
  const words = text
    .replace(/[^\w\s]/g, '') // remove punctuation
    .split(' ');

  const wordCount = {};

  words.forEach(word => {
    const lower = word.toLowerCase();
    wordCount[lower] = (wordCount[lower] || 0) + 1;
  });

  const sorted = Object.entries(wordCount)
    .map(([word, count]) => ({ word, count }))
    .sort((a, b) => b.count - a.count);

  return sorted.slice(0, limit);
}

function cleanText(sentence) {
  return sentence.replace(/[^\w\s]/g, '');
}

const cleaned = cleanText(sentence);
console.log(cleaned);


function mostFrequentWords(text, limit = 3) {
  const words = text.split(' ');

  const count = {};

  words.forEach(word => {
    count[word] = (count[word] || 0) + 1;
  });

  return Object.entries(count)
    .map(([word, count]) => ({ word, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, limit);
}

const cleanedText = cleanText(sentence);
console.log(mostFrequentWords(cleanedText));
