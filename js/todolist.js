const toDoListForm = document.getElementById("todolist-form")
const toDoInput = document.getElementById("todo-input")
const toDoList = document.getElementById("todolist")

const toDos = []

const getToDos = localStorage.getItem("toDos")

if (getToDos !== null) {
    const toDosParsed = JSON.parse(getToDos)
    console.log(toDosParsed)
    toDosParsed.forEach((item) => console.log("This is the turn of ", item))
}

function deleteBtnHandler(e) {
    const deletingTarget = e.target.parentNode
    deletingTarget.remove()
    // localStorage.removeItem("toDos") // Delete from localstorage
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
    e.preventDefault()
    toDoAction()
    toDoInput.value = ""
}

toDoListForm.addEventListener("submit", toDoListHandler)
