const form = document.querySelector(".input-form")
console.log(form)
const input = form.querySelector(".input")
console.log(input)
const logInBtn = form.querySelector(".logInBtn")
console.log(logInBtn)

function handleLogInBtn() {
    console.log("Clicked")
}

logInBtn.addEventListener("click", handleLogInBtn)
