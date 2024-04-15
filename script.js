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
    const lengthOfName = input.value.length
    console.log("Clicked")
    console.dir(input)
    console.log(lengthOfName)

    if (lengthOfName <= 1) {
        alert("You name is too short!")
    }
}

logInBtn.addEventListener("click", handleLogInBtn)
