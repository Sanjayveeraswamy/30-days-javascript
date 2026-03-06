function outerFunction() {
  let count = 0;

  function innerFunction() {
    count++;
    return count;
  }

  return innerFunction;
}

const counter = outerFunction();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3


function counterClosure() {
  let count = 0;

  function increment() {
    count++;
    return count;
  }

  function decrement() {
    count--;
    return count;
  }

  function getValue() {
    return count;
  }

  return {
    increment,
    decrement,
    getValue
  };
}

const counter2 = counterClosure();

console.log(counter2.increment()); // 1
console.log(counter2.increment()); // 2
console.log(counter2.decrement()); // 1
console.log(counter2.getValue());  // 1



function personAccount(firstname, lastname) {
  let incomes = [];
  let expenses = [];

  function addIncome(description, amount) {
    incomes.push({ description, amount });
  }

  function addExpense(description, amount) {
    expenses.push({ description, amount });
  }

  function totalIncome() {
    let total = 0;
    for (let income of incomes) {
      total += income.amount;
    }
    return total;
  }

  function totalExpense() {
    let total = 0;
    for (let expense of expenses) {
      total += expense.amount;
    }
    return total;
  }

  function accountBalance() {
    return totalIncome() - totalExpense();
  }

  function accountInfo() {
    return `Name: ${firstname} ${lastname}
Total Income: ${totalIncome()}
Total Expense: ${totalExpense()}
Balance: ${accountBalance()}`;
  }

  return {
    addIncome,
    addExpense,
    totalIncome,
    totalExpense,
    accountBalance,
    accountInfo
  };
}

const myAccount = personAccount("Sanjay", "Kumar");

myAccount.addIncome("Salary", 4000);
myAccount.addIncome("Freelance", 1000);

myAccount.addExpense("Rent", 1200);
myAccount.addExpense("Food", 300);

console.log(myAccount.accountInfo());