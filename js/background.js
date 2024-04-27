// Image array
const images = ["0.jpeg", "1.jpeg", "2.jpeg"]

// Choose random image
const chosenImg = Math.floor(Math.random() * images.length)
const backgroundImage = images[chosenImg]
console.log(backgroundImage)

// Add a new img tag
const newImageTag = document.createElement("img")
console.log(newImageTag)
newImageTag.src = `images/${backgroundImage}`
// console.log(newImageTag.src)

const divAfter = document.getElementById("quoteSection")
document.body.insertBefore(newImageTag, divAfter)