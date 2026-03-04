// Store values in localStorage
localStorage.setItem('firstName', 'Sanjay')
localStorage.setItem('lastName', 'Kumar')
localStorage.setItem('age', '22')
localStorage.setItem('country', 'India')
localStorage.setItem('city', 'Vijayawada')

// Check stored values
console.log(localStorage.getItem('firstName'))
console.log(localStorage.getItem('lastName'))
console.log(localStorage.getItem('age'))
console.log(localStorage.getItem('country'))
console.log(localStorage.getItem('city'))


const student = {
  firstName: 'Sanjay',
  lastName: 'Kumar',
  age: 22,
  skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  country: 'India',
  enrolled: true
}

// Convert object to JSON string
const studentJSON = JSON.stringify(student)

// Store in localStorage
localStorage.setItem('student', studentJSON)

// Retrieve from localStorage
const storedStudent = JSON.parse(localStorage.getItem('student'))
console.log(storedStudent)


const personAccount = {
  firstName: 'Sanjay',
  lastName: 'Kumar',

  incomes: [
    { description: 'Salary', amount: 50000 },
    { description: 'Freelance', amount: 10000 }
  ],

  expenses: [
    { description: 'Rent', amount: 15000 },
    { description: 'Food', amount: 5000 }
  ],

  totalIncome() {
    let total = 0
    this.incomes.forEach(income => {
      total += income.amount
    })
    return total
  },

  totalExpense() {
    let total = 0
    this.expenses.forEach(expense => {
      total += expense.amount
    })
    return total
  },

  accountInfo() {
    return `Name: ${this.firstName} ${this.lastName}
Total Income: ${this.totalIncome()}
Total Expense: ${this.totalExpense()}
Balance: ${this.accountBalance()}`
  },

  addIncome(description, amount) {
    this.incomes.push({ description, amount })
  },

  addExpense(description, amount) {
    this.expenses.push({ description, amount })
  },

  accountBalance() {
    return this.totalIncome() - this.totalExpense()
  }
}

// Test
personAccount.addIncome('Online Course', 7000)
personAccount.addExpense('Shopping', 2000)

console.log(personAccount.accountInfo())