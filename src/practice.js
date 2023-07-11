//DATE
const display = document.querySelector(".date")


const today = new Date()
const date = today.getDate() // shows todays date
const day = today.getDay() //shows todays day
const fullYear = today.getFullYear()
const hours = today.getHours()
const isoString = today.toISOString()
console.log(isoString)
const christmas = new Date("2023-12-24T10:19:42.563Z")
console.log(christmas - today)
const millSec = christmas - today

const minutes = millSec / 60000

display.innerHTML = Math.round(minutes)

console.log(minutes)

