class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }

  getInfo() {
    return `${this.name} is ${this.age} years old, has ${this.color} color and ${this.legs} legs.`;
  }

  makeSound() {
    return "Some generic animal sound";
  }
}

class Dog extends Animal {
  constructor(name, age, color, legs, breed) {
    super(name, age, color, legs);
    this.breed = breed;
  }

  makeSound() {
    return "Woof! Woof!";
  }

  getBreed() {
    return `Breed: ${this.breed}`;
  }
}

class Cat extends Animal {
  constructor(name, age, color, legs, isIndoor) {
    super(name, age, color, legs);
    this.isIndoor = isIndoor;
  }

  makeSound() {
    return "Meow!";
  }

  isIndoorCat() {
    return this.isIndoor ? "Indoor Cat" : "Outdoor Cat";
  }
}

const dog1 = new Dog("Buddy", 3, "Brown", 4, "Labrador");
console.log(dog1.getInfo());
console.log(dog1.makeSound());
console.log(dog1.getBreed());

const cat1 = new Cat("Kitty", 2, "White", 4, true);
console.log(cat1.getInfo());
console.log(cat1.makeSound());
console.log(cat1.isIndoorCat());

class Dog extends Animal {
  makeSound() {
    return "Woof! Woof!";
  }
}
class Cat extends Animal {
  makeSound() {
    return "Meow!";
  }
}

class Statistics {
  constructor(data) {
    this.data = data;
  }

  count() {
    return this.data.length;
  }

  sum() {
    return this.data.reduce((acc, val) => acc + val, 0);
  }

  min() {
    return Math.min(...this.data);
  }

  max() {
    return Math.max(...this.data);
  }

  range() {
    return this.max() - this.min();
  }

  mean() {
    return Math.round(this.sum() / this.count());
  }

  median() {
    const sorted = [...this.data].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
      return (sorted[mid - 1] + sorted[mid]) / 2;
    }
    return sorted[mid];
  }

  mode() {
    const freq = {};
    this.data.forEach(num => {
      freq[num] = (freq[num] || 0) + 1;
    });

    let maxCount = 0;
    let mode;

    for (let key in freq) {
      if (freq[key] > maxCount) {
        maxCount = freq[key];
        mode = Number(key);
      }
    }

    return { mode, count: maxCount };
  }

  var() {
    const mean = this.mean();
    const variance =
      this.data.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) /
      this.count();
    return Number(variance.toFixed(1));
  }

  std() {
    return Number(Math.sqrt(this.var()).toFixed(1));
  }

  percentile(p) {
    const sorted = [...this.data].sort((a, b) => a - b);
    const index = (p / 100) * (sorted.length - 1);
    return sorted[Math.floor(index)];
  }

  freqDist() {
    const freq = {};
    this.data.forEach(num => {
      freq[num] = (freq[num] || 0) + 1;
    });

    const total = this.count();

    const result = Object.entries(freq).map(([num, count]) => {
      return [Number(((count / total) * 100).toFixed(1)), Number(num)];
    });

    return result.sort((a, b) => b[0] - a[0]);
  }

  describe() {
    console.log('Count:', this.count());
    console.log('Sum:', this.sum());
    console.log('Min:', this.min());
    console.log('Max:', this.max());
    console.log('Range:', this.range());
    console.log('Mean:', this.mean());
    console.log('Median:', this.median());

    const mode = this.mode();
    console.log(`Mode: (${mode.mode}, ${mode.count})`);

    console.log('Variance:', this.var());
    console.log('Standard Deviation:', this.std());
    console.log('Frequency Distribution:', this.freqDist());
  }
}

class PersonAccount {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.incomes = [];
    this.expenses = [];
  }

  addIncome(description, amount) {
    this.incomes.push({ description, amount });
  }

  addExpense(description, amount) {
    this.expenses.push({ description, amount });
  }

  totalIncome() {
    return this.incomes.reduce((acc, item) => acc + item.amount, 0);
  }

  totalExpense() {
    return this.expenses.reduce((acc, item) => acc + item.amount, 0);
  }

  accountBalance() {
    return this.totalIncome() - this.totalExpense();
  }

  accountInfo() {
    return `Name: ${this.firstName} ${this.lastName}
Total Income: ${this.totalIncome()}
Total Expense: ${this.totalExpense()}
Balance: ${this.accountBalance()}`;
  }
}


const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];

const statistics = new Statistics(ages);
statistics.describe();

const person = new PersonAccount("Sanjay", "Kumar");

person.addIncome("Salary", 50000);
person.addIncome("Freelancing", 10000);

person.addExpense("Food", 5000);
person.addExpense("Rent", 15000);

console.log(person.accountInfo());

