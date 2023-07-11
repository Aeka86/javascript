// // .sort()

// const planets = ["Mars", "Jupiter", "Uranus", "Earth"]

// console.log(planets.sort())
// //it sorts all the words alphabetically

// const ages = [32, 45, 56, 13, 99, 78]

// console.log(ages.sort())

// //it sorts the numbers from small to big
let lat = "";
let lan = "";
const apiKey = "281f73a21cef625e8324805ad66f649b";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={apiKey}";
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("submit").onclick = function () {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("message").innerHTML = JSON.stringify(data);
      });
  };
});
