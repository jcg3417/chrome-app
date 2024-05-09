const toDoListForm = document.getElementById("todolist-form")
const toDoInput = document.getElementById("todo-input")
const toDoList = document.getElementById("todolist")
const toDoAddBtn = document.getElementById("todolist-add-btn")

let toDos = []

const getToDos = localStorage.getItem("toDos")

if (getToDos !== null) {
    const toDosParsed = JSON.parse(getToDos)
    toDos = toDosParsed
    toDosParsed.forEach((item) => toDoAction())
}

function deleteBtnHandler(e) {
    // Delete from DOM
    console.log(toDos)
    const deletingTarget = e.target.parentNode
    deletingTarget.remove()

    // Delete from the localstorage
    // 1. Delete selected element from toDos array

    // 2. Empty local storage
    localStorage.removeItem("toDos")
    // 2. Update toDos array and save the updated version to local storage again
    localStorage.setItem("toDos", JSON.stringify(toDos))
    console.log(toDos)
}

function storeToDos() {
    localStorage.setItem("toDos", JSON.stringify(toDos)) // Save in localstorage
}

function toDoAction() {
    // Add HTML elements
    const span = document.createElement("span")
    const li = document.createElement("li")
    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("deleteBtn")
    deleteBtn.innerText = "❌"

    let toDoText = toDoInput.value // User todo input

    li.appendChild(span)
    li.appendChild(deleteBtn)
    span.innerText = toDoText
    toDoList.appendChild(li)

    toDos.push(toDoText) // Add new todo to toDos array
    storeToDos() // Store user's todos in localstorage

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
toDoAddBtn.addEventListener("click", toDoListHandler)
