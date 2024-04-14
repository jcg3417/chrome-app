const form = document.querySelector(".input-form")
console.log(form)
const input = form.querySelector(".input")
console.log(input)
const logInBtn = form.querySelector(".logInBtn")
console.log(logInBtn)

function handleLogInBtn() {
    if (input.value === "") {
        alert("Please type in your name!")
    }

    console.log("Clicked")
    console.log(input.value)
}

logInBtn.addEventListener("click", handleLogInBtn)
