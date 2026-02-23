let dog1 = {};



let dog = {};
dog.name = "Buddy";
dog.legs = 4;
dog.color = "brown";
dog.age = 4;
dog.bark = function(){
    return "woof woof"
}
console.log(dog)
console.log(dog.age);
console.log(dog.color)

dog.breed = "Labrador";
dog.getDogInfo = function () {
  return `Name: ${dog.name}, Breed: ${dog.breed}, Age: ${dog.age}, Color: ${dog.color}, Legs: ${dog.legs}`;
};
console.log(dog)

console.log(dog.getDogInfo());

const users = {
  Alex: { email: 'alex@alex.com', skills: ['HTML','CSS','JavaScript'], age: 20, isLoggedIn: false, points: 30 },
  Asab: { email: 'asab@asab.com', skills: ['HTML','CSS','JavaScript','Redux','MongoDB','Express','React','Node'], age: 25, isLoggedIn: false, points: 50 },
  Brook: { email: 'daniel@daniel.com', skills: ['HTML','CSS','JavaScript','React','Redux'], age: 30, isLoggedIn: true, points: 50 },
  Daniel: { email: 'daniel@alex.com', skills: ['HTML','CSS','JavaScript','Python'], age: 20, isLoggedIn: false, points: 40 },
  John: { email: 'john@john.com', skills: ['HTML','CSS','JavaScript','React','Redux','Node.js'], age: 20, isLoggedIn: true, points: 50 },
  Thomas: { email: 'thomas@thomas.com', skills: ['HTML','CSS','JavaScript','React'], age: 20, isLoggedIn: false, points: 40 },
  Paul: { email: 'paul@paul.com', skills: ['HTML','CSS','JavaScript','MongoDB','Express','React','Node'], age: 20, isLoggedIn: false, points: 40 }
};

let maxskilluser = 0;
let mostskilluser = ''

for(let user in users){
    if(users[user].skills.length>maxskilluser){
        maxskilluser = users[user].skills.length;
        mostskilluser = user;
    }
}

console.log(mostskilluser)

const users1 = {  Alex: { email: 'alex@alex.com', skills: ['HTML','CSS','JavaScript'], age: 20, isLoggedIn: false, points: 30 },
  Asab: { email: 'asab@asab.com', skills: ['HTML','CSS','JavaScript','Redux','MongoDB','Express','React','Node'], age: 25, isLoggedIn: false, points: 50 },
  Brook: { email: 'daniel@daniel.com', skills: ['HTML','CSS','JavaScript','React','Redux'], age: 30, isLoggedIn: true, points: 50 },
  Daniel: { email: 'daniel@alex.com', skills: ['HTML','CSS','JavaScript','Python'], age: 20, isLoggedIn: false, points: 40 },
  John: { email: 'john@john.com', skills: ['HTML','CSS','JavaScript','React','Redux','Node.js'], age: 20, isLoggedIn: true, points: 50 },
  Thomas: { email: 'thomas@thomas.com', skills: ['HTML','CSS','JavaScript','React'], age: 20, isLoggedIn: false, points: 40 },
  Paul: { email: 'paul@paul.com', skills: ['HTML','CSS','JavaScript','MongoDB','Express','React','Node'], age: 20, isLoggedIn: false, points: 40 }};

let loggedInCount = 0;
let highPointsCount = 0;

for (let user in users1) {
  if (users1[user].isLoggedIn) {
    loggedInCount++;
  }
  if (users1[user].points >= 50) {
    highPointsCount++;
  }
}

console.log("Logged in users:", loggedInCount);
console.log("Users with >=50 points:", highPointsCount);


let mernDevelopers = [];

for (let user in users) {
  let skills = users[user].skills;
  if (
    skills.includes('MongoDB') &&
    skills.includes('Express') &&
    skills.includes('React') &&
    skills.includes('Node')
  ) {
    mernDevelopers.push(user);
  }
}

console.log("MERN Developers:", mernDevelopers);

const newUsers = {
  ...users,
  Sanjay: {
    email: 'sanjay@gmail.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 21,
    isLoggedIn: false,
    points: 0
  }
};

console.log(newUsers);

const keys = Object.keys(users);
console.log(keys);

const countries = {
  India: {
    capital: "New Delhi",
    population: 1400000000,
    languages: ["Hindi", "English"]
  },
  USA: {
    capital: "Washington, D.C.",
    population: 331000000,
    languages: ["English"]
  }
};

for (let country in countries) {
  console.log(
    country,
    countries[country].capital,
    countries[country].population,
    countries[country].languages
  );
}


const personAccount = {
  firstName: "Sanjay",
  lastName: "Kumar",

  incomes: [
    { description: "Salary", amount: 5000 },
    { description: "Freelancing", amount: 2000 }
  ],

  expenses: [
    { description: "Food", amount: 1000 },
    { description: "Rent", amount: 1500 }
  ],

  totalIncome: function () {
    let total = 0;
    for (let income of this.incomes) {
      total += income.amount;
    }
    return total;
  },

  totalExpense: function () {
    let total = 0;
    for (let exp of this.expenses) {
      total += exp.amount;
    }
    return total;
  },

  accountInfo: function () {
    return `${this.firstName} ${this.lastName} - Income: ${this.totalIncome()} Expense: ${this.totalExpense()}`;
  },

  addIncome: function (desc, amount) {
    this.incomes.push({ description: desc, amount: amount });
  },

  addExpense: function (desc, amount) {
    this.expenses.push({ description: desc, amount: amount });
  },

  accountBalance: function () {
    return this.totalIncome() - this.totalExpense();
  }
};

console.log(personAccount.accountInfo());
console.log("Balance:", personAccount.accountBalance());

const users8 = [
  { _id: 'ab12ex', username: 'Alex', email: 'alex@alex.com', password: '123123', createdAt:'08/01/2020', isLoggedIn: false },
  { _id: 'fg12cy', username: 'Asab', email: 'asab@asab.com', password: '123456', createdAt:'08/01/2020', isLoggedIn: true }
];

function signUp(newUser) {
  for (let user of users8) {
    if (user.email === newUser.email) {
      console.log("User already exists");
      return;
    }
  }
  users8.push(newUser);
  console.log("User registered successfully");
}

signUp({
  _id: 'new123',
  username: 'Sanjay',
  email: 'sanjay@gmail.com',
  password: '111111',
  createdAt: new Date(),
  isLoggedIn: false
});

console.log(users8);

function signIn(email, password) {
  for (let user of users) {
    if (user.email === email && user.password === password) {
      user.isLoggedIn = true;
      console.log("Login successful");
      return;
    }
  }
  console.log("Invalid credentials");
}

signIn('alex@alex.com', '123123');

function signIn(email, password) {
  for (let user of users8) {
    if (user.email === email && user.password === password) {
      user.isLoggedIn = true;
      console.log("Login successful");
      return;
    }
  }
  console.log("Invalid credentials");
}

signIn('alex@alex.com', '123123');

const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    ratings: []
  }
];

function rateProduct(productId, userId, rate) {
  for (let product of products) {
    if (product._id === productId) {
      product.ratings.push({ userId, rate });
    }
  }
}

rateProduct('eedfcf', 'user1', 5);
console.log(products);

const products2 = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    likes: []
  }
];

function likeProduct(productId, userId) {
  for (let product of products2) {
    if (product._id === productId) {
      let index = product.likes.indexOf(userId);

      if (index === -1) {
        product.likes.push(userId);
        console.log("Liked");
      } else {
        product.likes.splice(index, 1);
        console.log("Unliked");
      }
    }
  }
}

likeProduct('eedfcf', 'user1');
likeProduct('eedfcf', 'user1'); // toggle
console.log(products2);