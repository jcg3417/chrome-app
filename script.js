const form = document.querySelector(".input-form")
const input = form.querySelector(".input")
const logInBtn = form.querySelector(".logInBtn")
const HIDDEN_CLASSNAME = "hidden"

function handleLogInBtn() {
    const lengthOfName = input.value.length

    let hiddenInnerTextH1 = document.getElementById("h1")
    console.log(hiddenInnerTextH1)
    let userName = input.value
    console.log(userName)

    if (userName === "") {
        alert("Please type in your name!")
    } else if (lengthOfName <= 1) {
        alert("You name is too short!")
    } else if (lengthOfName > 15) {
        alert("Your name is too long!")
    } else {
        form.classList.add(HIDDEN_CLASSNAME)
        document.getElementById("h1").classList.remove(HIDDEN_CLASSNAME)
        hiddenInnerTextH1.innerText = `Hooray!!! Hello ${userName}!`
    }
}

logInBtn.addEventListener("click", handleLogInBtn)
