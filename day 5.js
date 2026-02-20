const arr = [1,2,3]
console.log(arr);

const countries1 = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]
console.log(countries1)
console.log(countries1.length);


firstitem = countries1[0];
middleitem = countries1[5];
let lastindex = countries1.length-1;
lastitem = countries1[lastindex]

console.log(firstitem)
console.log(middleitem)
console.log(lastitem)

const mixeddataitem = [
    'Asabeneh',
    250,
    true,
    { country: 'Finland', city: 'Helsinki' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
] // arr containing different data types
console.log(mixeddataitem)

const companies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(companies)

console.log(arr)

console.log(companies)
console.log(companies.length)

company1 = companies[0]
console.log(company1)

companies.forEach(company => console.log(company.toUpperCase()));

console.log(companies.join("# ") + " are big IT companies.");

let search = "Google";
console.log(companies.includes(search) ? search : "Company is not found");

let result = [];
companies.map(company => {
  let count = company.toLowerCase().split('o').length - 1;
  if (count > 1) result.push(company);
});
console.log("More than one 'o':", result);

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
webTechs.sort()
console.log(webTechs)

webTechs.reverse()
console.log(webTechs)

console.log("First 3:", companies.slice(0, 3));

console.log("Last 3:", companies.slice(-3));

let mid = Math.floor(companies.length / 2);
console.log(
  "Middle:",
  companies.length % 2 === 0
    ? companies.slice(mid - 1, mid + 1)
    : companies.slice(mid, mid + 1)
);


let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

// remove punctuation
let cleaned = text.replace(/[.,]/g, '');

// convert to array
let words = cleaned.split(' ');

console.log(words);
console.log(words.length);

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// add Meat at beginning
if (!shoppingCart.includes('Meat')) {
  shoppingCart.unshift('Meat');
}

// add Sugar at end
if (!shoppingCart.includes('Sugar')) {
  shoppingCart.push('Sugar');
}

// remove Honey
const honeyIndex = shoppingCart.indexOf('Honey');
if (honeyIndex !== -1) {
  shoppingCart.splice(honeyIndex, 1);
}

// modify Tea to Green Tea
const teaIndex = shoppingCart.indexOf('Tea');
if (teaIndex !== -1) {
  shoppingCart[teaIndex] = 'Green Tea';
}

console.log(shoppingCart);

let countries2 = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombi',
  'Comoros',
  'Congo (Brazzaville)',
  'Congo',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor (Timor Timur)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia, The',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, North',
  'Korea, South',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia and Montenegro',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe'
]


if (countries2.includes('Ethiopia')) {
  console.log('ETHIOPIA');
} else {
  countries2.push('Ethiopia');
  console.log(countries2);
}

if (webTechs.includes('Sass')) {
  console.log('Sass is a CSS preprocess');
} else {
  webTechs.push('Sass');
  console.log(webTechs);
}

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack)

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// sort
ages.sort((a, b) => a - b);

// min & max
const min = ages[0];
const max = ages[ages.length - 1];

// median
let median;
if (ages.length % 2 === 0) {
  median = (ages[ages.length/2 - 1] + ages[ages.length/2]) / 2;
} else {
  median = ages[Math.floor(ages.length/2)];
}

// average
const sum = ages.reduce((acc, val) => acc + val, 0);
const avg = sum / ages.length;

// range
const range = max - min;

// compare
const minDiff = Math.abs(min - avg);
const maxDiff = Math.abs(max - avg);

console.log({ min, max, median, avg, range, minDiff, maxDiff });

const firstTen = countries2.slice(0, 10);
console.log(firstTen);


let middle;

if (countries2.length % 2 === 0) {
  middle = [
    countries2[countries2.length/2 - 1],
    countries2[countries2.length/2]
  ];
} else {
  middle = countries2[Math.floor(countries2.length/2)];
}

console.log(middle);

let firstHalf, secondHalf;

if (countries2.length % 2 === 0) {
  firstHalf = countries2.slice(0, countries2.length/2);
  secondHalf = countries2.slice(countries2.length/2);
} else {
  firstHalf = countries2.slice(0, Math.ceil(countries2.length/2));
  secondHalf = countries2 .slice(Math.ceil(countries2.length/2));
}

console.log(firstHalf);
console.log(secondHalf);