const form = document.querySelector(".logIn-form")
const input = form.querySelector(".logIn-input")
const logInBtn = form.querySelector(".logIn-Btn")
const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "userName"

// Adding log out btn
function addLogOutBtn() {
    const logOutBtn = document.createElement("button") // Create btn element
    logOutBtn.classList.add("logout-btn")
    logOutBtn.textContent = "LOG OUT"
    const parentElement = document.getElementById("greetings") // Select parent element
    parentElement.appendChild(logOutBtn) // Append back btn under greetings

    logOutBtn.addEventListener("click", handleLogOutBtn)
}

// Log out
function handleLogOutBtn() {
    const logOutBtn = document.querySelector(".logout-btn")
    logOutBtn.remove()

    form.classList.remove(HIDDEN_CLASSNAME) // Hiding original form
    document.getElementById("greetings").classList.add(HIDDEN_CLASSNAME) // Showing welcome message
    input.value = ""

    localStorage.removeItem("userName") // Delete userName from local storage
}

// When the log in btn pressed
function handleLogInBtn() {
    const lengthOfName = input.value.length

    const userName = input.value.trim() // User input without blanks
    const hiddenInnerTextH1 = document.getElementById("greetings") // Greetings

    if (userName === "") {
        alert("Please type in your name!")
    } else if (lengthOfName <= 1) {
        alert("You name is too short!")
    } else if (lengthOfName > 15) {
        alert("Your name is too long!")
    } else {
        form.classList.add(HIDDEN_CLASSNAME) // Hiding original form
        document.getElementById("greetings").classList.remove(HIDDEN_CLASSNAME) // Showing welcome message
        hiddenInnerTextH1.innerText = `Hello ${userName}!`

        localStorage.setItem(USERNAME_KEY, userName) //Saving user input

        addLogOutBtn() // Adding & presenting logOut btn
    }
}

logInBtn.addEventListener("click", handleLogInBtn)
