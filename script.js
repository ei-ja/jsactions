function color(color) {
  document.body.style.backgroundColor = color
}

function cube() {
  let number = Math.floor(Math.random() * 6) + 1
  document.getElementById("number").innerHTML = "Zahl: " + number
}

var animals = ["Hase", "Kuh", "Pferd", "Vogel", "Fisch", "Hund", "Katze", "Schwein"];

function animal() {
  let animal = Math.floor(Math.random() * animals.length)
  document.getElementById("animal").innerHTML = "Tier: " + animals[animal]
}
