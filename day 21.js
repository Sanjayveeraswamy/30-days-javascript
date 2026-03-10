const firstPara = document.querySelector('p')
const para1 = document.querySelector('#p1')
const para2 = document.querySelector('#p2')
const para3 = document.querySelector('#p3')
const para4 = document.querySelector('#p4')

const allParagraphs = document.querySelectorAll('p')

allParagraphs.forEach(p => {
  console.log(p.textContent)
})

para4.textContent = "Fourth Paragraph"

allParagraphs.forEach((p,i)=>{
  p.setAttribute("class","paragraph")
})

allParagraphs.forEach((p,i)=>{

  p.style.fontSize = "18px"
  p.style.fontFamily = "Arial"
  p.style.border = "1px solid black"
  p.style.padding = "5px"

  if(i % 2 === 0){
    p.style.color = "green"
  }else{
    p.style.color = "red"
  }

})

const year = document.querySelector("#year")

function randomColor(){
  const letters = "0123456789ABCDEF"
  let color = "#"
  for(let i=0;i<6;i++){
    color += letters[Math.floor(Math.random()*16)]
  }
  return color
}

// change year color every second
setInterval(()=>{
  year.style.color = randomColor()
},1000)

const datetime = document.querySelector("#datetime")

function showTime(){
  const now = new Date()
  datetime.textContent = now.toLocaleString()
  datetime.style.backgroundColor = randomColor()
  datetime.style.padding = "10px"
}

setInterval(showTime,1000)


// challenge colors
const challenges = document.querySelectorAll("#challenges li")

challenges.forEach(li=>{
  if(li.textContent.includes("Done")){
    li.style.backgroundColor = "green"
  }
  else if(li.textContent.includes("Ongoing")){
    li.style.backgroundColor = "yellow"
  }
  else{
    li.style.backgroundColor = "red"
  }

  li.style.margin = "5px"
  li.style.padding = "10px"
  li.style.listStyle = "none"
})
