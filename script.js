const form = document.querySelector(".input-form")
const input = form.querySelector(".input")
const logInBtn = form.querySelector(".logInBtn")
const HIDDEN_CLASSNAME = "hidden"
const body = document.body.innerText

console.log(body)

function handleLogInBtn() {
    const lengthOfName = input.value.length

    const userName = input.value
    console.log(userName)

    if (userName === "") {
        alert("Please type in your name!")
    } else if (lengthOfName <= 1) {
        alert("You name is too short!")
    } else if (lengthOfName > 15) {
        alert("Your name is too long!")
    } else {
        form.classList.add(HIDDEN_CLASSNAME)
    }
}

logInBtn.addEventListener("click", handleLogInBtn)
