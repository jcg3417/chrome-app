const form = document.querySelector(".input-form")
const input = form.querySelector(".input")
const logInBtn = form.querySelector(".logInBtn")
const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "userName"

function addReturnBtn() {
    document.getElementById("greetings").appendChild
    let returnToHomeBtn = document.createElement("button")
    returnToHomeBtn.textContent = "Back"
    let parentElement = document.getElementById("greetings")
    parentElement.appendChild(returnToHomeBtn)
}

//When the log in btn pressed
function handleLogInBtn() {
    const lengthOfName = input.value.length

    let hiddenInnerTextH1 = document.getElementById("greetings") //Greetings
    let userName = input.value.trim() //User input

    if (userName === "") {
        alert("Please type in your name!")
    } else if (lengthOfName <= 1) {
        alert("You name is too short!")
    } else if (lengthOfName > 15) {
        alert("Your name is too long!")
    } else {
        form.classList.add(HIDDEN_CLASSNAME) //Hiding original form
        document.getElementById("greetings").classList.remove(HIDDEN_CLASSNAME) //Showing welcome message
        hiddenInnerTextH1.innerText = `Hooray!!! Hello ${userName}!`

        localStorage.setItem(USERNAME_KEY, userName) //Saving user input

        addReturnBtn() //Adding & showing return btn
    }
}

logInBtn.addEventListener("click", handleLogInBtn)

const getTime = document.getElementById("time")

function getRealTime() {
    const date = new Date()
    getTime.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    // console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
}

setInterval(getRealTime, 1000)
