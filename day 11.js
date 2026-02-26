const constants = [2.72, 3.14, 9.81, 37, 100]

const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants

console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp)

const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']

const [fin, est, sw, den, nor] = countries

console.log(fin, est, sw, den, nor)


const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}

const { width, height, area, perimeter } = rectangle

console.log(width, height, area, perimeter)

users.forEach(({ name, scores, skills, age }) => {
  console.log(name, scores, skills, age)
})

const lessSkills = users.filter(({ skills }) => skills.length < 2)

console.log(lessSkills)

const countriesData = [
  {
    name: 'Finland',
    capital: 'Helsinki',
    population: 5500000,
    languages: ['Finnish', 'Swedish']
  }
]

countriesData.forEach(({ name, capital, population, languages }) => {
  console.log(name, capital, population, languages)
})

const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]

const [name, skills, [, , jsScore, reactScore]] = student

console.log(name, skills, jsScore, reactScore)

const convertArrayToObject = (students) => {
  return students.map(([name, skills, scores]) => ({
    name,
    skills,
    scores
  }))
}

const students = [
  ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
  ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

console.log(convertArrayToObject(students))

const newStudent = {
  ...student,
  skills: {
    ...student.skills,

    frontEnd: [
      ...student.skills.frontEnd,
      { skill: 'BootStrap', level: 8 }
    ],

    backEnd: [
      ...student.skills.backEnd,
      { skill: 'Express', level: 9 }
    ],

    dataBase: [
      ...student.skills.dataBase,
      { skill: 'SQL', level: 8 }
    ],

    dataScience: [
      ...student.skills.dataScience,
      'SQL'
    ]
  }
}

console.log(newStudent)


