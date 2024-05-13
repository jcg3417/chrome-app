const toDoListForm = document.getElementById("todolist-form")
const toDoInput = document.getElementById("todo-input")
const toDoList = document.getElementById("todolist")
const toDoAddBtn = document.getElementById("todolist-add-btn")

let toDos = []

const getToDos = localStorage.getItem("toDos")

if (getToDos !== null) {
    const toDosParsed = JSON.parse(getToDos)
    toDos = toDosParsed
    toDosParsed.forEach((item) => console.log("forEach runs"))
}

function toDoAction() {
    // Add HTML elements
    const span = document.createElement("span")
    const li = document.createElement("li")
    const deleteBtn = document.createElement("button")
    let toDoText = toDoInput.value // User todo input
    span.classList.add(`${toDoText}`)
    deleteBtn.classList.add("deleteBtn")
    deleteBtn.innerText = "❌"
    deleteBtn.addEventListener("click", deleteBtnHandler)

    li.appendChild(span)
    li.appendChild(deleteBtn)
    span.innerText = toDoText
    toDoList.appendChild(li)

    toDos.push(toDoText) // Add new todo to toDos array
    storeToDos() // Store user's todos in localstorage
}

function deleteBtnHandler(e) {
    // Delete from DOM
    const deletingTarget = e.target.parentNode
    deletingTarget.remove()

    // Delete from the localstorage
    // 1. Delete selected element from toDos array
    const targetText = deletingTarget.children[0].innerText
    const index = toDos.indexOf()
    toDos.splice(index, 1)
    // 2. Empty local storage
    localStorage.removeItem("toDos")
    // 3. Update toDos array and save the updated version to local storage again
    storeToDos()
}

function storeToDos() {
    localStorage.setItem("toDos", JSON.stringify(toDos)) // Save in localstorage
}

function toDoListHandler(e) {
    if (toDoInput.value !== "") {
        e.preventDefault()
        toDoAction()
        toDoInput.value = ""
        const newTodoObj = {
            text: newTodo,
            id: Date.now(),
        }
        toDos.push(newTodoObj)
        toDoAction(newTodoObj)
        storeToDos()
    }
}

toDoListForm.addEventListener("submit", toDoListHandler)
toDoAddBtn.addEventListener("click", toDoListHandler)
