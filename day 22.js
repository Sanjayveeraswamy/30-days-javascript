// BODY STYLE
document.body.style.fontFamily = "Arial"
document.body.style.textAlign = "center"
document.body.style.backgroundColor = "#f5f5f5"

// TITLE
const title = document.createElement("h1")
title.innerHTML = "Asabeneh Yetayeh challenges in <span id='year'>2020</span>"
document.body.appendChild(title)

// CHANGE YEAR COLOR
const year = document.getElementById("year")
year.style.fontSize = "70px"

function changeYearColor() {
  const colors = ["red","green","blue","purple","orange"]
  year.style.color = colors[Math.floor(Math.random()*colors.length)]
}
setInterval(changeYearColor,1000)


// SUBTITLE
const subtitle = document.createElement("h3")
subtitle.innerText = "30DaysOfJavaScript Challenge"
subtitle.style.textDecoration = "underline"
document.body.appendChild(subtitle)


// DATE
const date = document.createElement("div")
date.style.display = "inline-block"
date.style.padding = "10px"
date.style.margin = "20px"
document.body.appendChild(date)

function showDate(){
  const now = new Date()
  date.innerText = now.toLocaleString()

  const colors = ["#f4c542","#8e44ad","#2ecc71","#e74c3c"]
  date.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)]
}

setInterval(showDate,1000)


// CHALLENGE DATA
const challenges = [
{
name:"30 Days Of Python",
topics:["Python"],
status:"Done"
},
{
name:"30 Days Of JavaScript",
topics:["JavaScript"],
status:"Ongoing"
},
{
name:"30 Days Of HTML & CSS",
topics:["HTML","CSS"],
status:"Coming"
},
{
name:"30 Days Of React",
topics:["React"],
status:"Coming"
},
{
name:"30 Days Of ReactNative",
topics:["ReactNative"],
status:"Coming"
},
{
name:"30 Days Of Fullstack",
topics:["Fullstack"],
status:"Coming"
},
{
name:"30 Days Of Data Analysis",
topics:["Data Analysis"],
status:"Coming"
},
{
name:"30 Days Of Machine Learning",
topics:["Machine Learning"],
status:"Coming"
}
]

// CONTAINER
const container = document.createElement("div")
container.style.width = "60%"
container.style.margin = "auto"
document.body.appendChild(container)


// LOOP CHALLENGES
challenges.forEach(challenge=>{

const row = document.createElement("div")
row.style.display = "flex"
row.style.justifyContent = "space-between"
row.style.padding = "20px"
row.style.margin = "5px"

if(challenge.status==="Done"){
row.style.backgroundColor="#2ecc71"
}
else if(challenge.status==="Ongoing"){
row.style.backgroundColor="#f1c40f"
}
else{
row.style.backgroundColor="#e74c3c"
}

// NAME
const name = document.createElement("div")
name.innerText = challenge.name


// DETAILS DROPDOWN
const details = document.createElement("details")
const summary = document.createElement("summary")
summary.innerText = challenge.topics[0]

details.appendChild(summary)

challenge.topics.forEach(topic=>{
const p = document.createElement("p")
p.innerText = topic
details.appendChild(p)
})


// STATUS
const status = document.createElement("div")
status.innerText = challenge.status


row.appendChild(name)
row.appendChild(details)
row.appendChild(status)

container.appendChild(row)

})