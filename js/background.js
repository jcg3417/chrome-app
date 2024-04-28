// Image array
const images = ["0.jpeg", "1.jpeg", "2.jpeg"]

// Choose random image
const chosenImg = Math.floor(Math.random() * images.length)
const backgroundImage = images[chosenImg])

// Add a new img tag
const newImageElement = document.createElement("img")
newImageElement.src = `images/${backgroundImage}`

// Append background element
document.body.appendChild(newImageElement)
