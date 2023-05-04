const dropDownBtn = document.querySelector(".dropbtn")

const dropDown = document.querySelector(".dropdown")

dropDownBtn.addEventListener("click", function() {
    dropDown.classList.toggle("clicked")
  });

  window.addEventListener("click", function(event)
  {
    if (!event.target.matches(".dropbtn")) {
        dropDown.classList.remove("clicked")
    }
  }
  )

console.log(dropDown)