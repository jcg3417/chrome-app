const form = document.querySelector(".input-form")
console.log(form)
const input = form.querySelector(".input")
console.log(input)
const logInBtn = form.querySelector(".logInBtn")
console.log(logInBtn)

function handleLogInBtn() {
    const lengthOfName = input.value.length
    const userName = input.value

    if (input.value === "") {
        alert("Please type in your name!")
    } else if (lengthOfName <= 1) {
        alert("You name is too short!")
    } else if (lengthOfName > 15) {
        alert("Your name is too long!")
    } else {
        form.classList.add("hidden")
    }
    console.log("Clicked")
    console.dir(input)
    console.log(lengthOfName)
}

logInBtn.addEventListener("click", handleLogInBtn)
