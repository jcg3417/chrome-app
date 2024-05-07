const form = document.querySelector(".input-form")
const input = form.querySelector(".input")
const logInBtn = form.querySelector(".logInBtn")
const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "userName"

// Adding back btn
function addReturnBtn() {
    let returnToHomeBtn = document.createElement("button") // Create btn element
    returnToHomeBtn.textContent = "Back" // Add text in back btn
    let parentElement = document.getElementById("greetings") // Select parent element
    parentElement.appendChild(returnToHomeBtn) // Append back btn under greetings
}

// When the log in btn pressed
function handleLogInBtn() {
    const lengthOfName = input.value.length

    let hiddenInnerTextH1 = document.getElementById("greetings") // Greetings
    let userName = input.value.trim() // User input

    if (userName === "") {
        alert("Please type in your name!")
    } else if (lengthOfName <= 1) {
        alert("You name is too short!")
    } else if (lengthOfName > 15) {
        alert("Your name is too long!")
    } else {
        form.classList.add(HIDDEN_CLASSNAME) // Hiding original form
        document.getElementById("greetings").classList.remove(HIDDEN_CLASSNAME) // Showing welcome message
        hiddenInnerTextH1.innerText = `Welcome ${userName}!`

        localStorage.setItem(USERNAME_KEY, userName) //Saving user input

        addReturnBtn() // Adding & showing return btn
    }
}

logInBtn.addEventListener("click", handleLogInBtn)
