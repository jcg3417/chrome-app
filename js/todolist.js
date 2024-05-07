const toDoListForm = document.getElementById("todolist-form")
const toDoInput = document.getElementById("todo-input")
const toDoList = document.getElementById("todolist")
const toDoListAddBtn = document.getElementById("todolist-add-btn")

let toDos = []

const getToDos = localStorage.getItem("toDos")

if (getToDos !== null) {
    const toDosParsed = JSON.parse(getToDos)
    toDos = toDosParsed
    toDosParsed.forEach((item) => console.log("This is the turn of ", item))
}

function deleteBtnHandler(e) {
    // Delete from DOM
    const deletingTarget = e.target.parentNode
    console.log(deletingTarget)
    deletingTarget.remove()

    // Delete from the localstorage
    // localStorage.getItem(`${}`)    // Find the element to remove
}

function storeToDos() {
    localStorage.setItem("toDos", JSON.stringify(toDos)) // Save in localstorage
}

function toDoAction() {
    const span = document.createElement("span")
    const li = document.createElement("li")
    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("deleteBtn")
    deleteBtn.innerText = "❌"

    let toDoText = toDoInput.value

    li.appendChild(span)
    li.appendChild(deleteBtn)

    span.innerText = toDoText

    toDos.push(toDoText)
    storeToDos()

    toDoList.appendChild(li)

    deleteBtn.addEventListener("click", deleteBtnHandler)
}

function toDoListHandler(e) {
    if (toDoInput.value !== "") {
        e.preventDefault()
        toDoAction()
        toDoInput.value = ""
    }
}

toDoListForm.addEventListener("submit", toDoListHandler)
toDoListAddBtn.addEventListener("click", toDoListHandler)
