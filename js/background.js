// Image array
const images = ["0.jpeg", "1.jpeg", "2.jpeg"]

// Choose random image
const chosenImg = Math.floor(Math.random() * images.length)
const backgroundImage = images[chosenImg]
console.log(backgroundImage)

// Add a new img tag
const newImageElement = document.createElement("img")
console.log(newImageElement)
newImageElement.src = `images/${backgroundImage}`

// Append background element
document.body.appendChild(newImageElement)
