const countriesAPI = 'https://restcountries.com/v2/all'

fetch(countriesAPI)
  .then(response => response.json())
  .then(data => {
    data.forEach(country => {
      console.log(
        "Name:", country.name,
        "Capital:", country.capital,
        "Languages:", country.languages.map(l => l.name).join(', '),
        "Population:", country.population,
        "Area:", country.area
      )
    })
  })
  .catch(error => console.log(error))


  const catsAPI = 'https://api.thecatapi.com/v1/breeds'

fetch(catsAPI)
  .then(response => response.json())
  .then(data => {
    const catNames = data.map(cat => cat.name)
    console.log(catNames)
  })
  .catch(error => console.log(error))

  fetch(catsAPI)
  .then(response => response.json())
  .then(data => {
    let totalWeight = 0
    let count = 0

    data.forEach(cat => {
      let weights = cat.weight.metric.split(' - ')
      let avg = (parseFloat(weights[0]) + parseFloat(weights[1])) / 2
      totalWeight += avg
      count++
    })

    let averageWeight = totalWeight / count
    console.log("Average cat weight:", averageWeight.toFixed(2), "kg")
  })


  fetch(countriesAPI)
  .then(response => response.json())
  .then(data => {
    const largest = data
      .sort((a, b) => b.area - a.area)
      .slice(0, 10)

    largest.forEach(country => {
      console.log(country.name, country.area)
    })
  })


  fetch(countriesAPI)
  .then(response => response.json())
  .then(data => {
    const languages = []

    data.forEach(country => {
      country.languages.forEach(lang => {
        if (!languages.includes(lang.name)) {
          languages.push(lang.name)
        }
      })
    })

    console.log("Total official languages:", languages.length)
  })

  