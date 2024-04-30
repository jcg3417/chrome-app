const toDoListForm = document.getElementById("todolist-form")
const toDoInput = document.getElementById("todo-input")
const toDoList = document.getElementById("todolist")

function deleteBtnHandler(e) {
    e.target.parentNode.remove()
}

function addToDo() {
    let toDoText = toDoInput.value

    const span = document.createElement("span")
    const li = document.createElement("li")
    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("deleteBtn")
    deleteBtn.innerText = "❌"

    li.appendChild(span)
    li.appendChild(deleteBtn)

    span.innerText = toDoText

    toDoList.appendChild(li)

    deleteBtn.addEventListener("click", deleteBtnHandler)
}

function toDoListHandler(e) {
    e.preventDefault()
    addToDo()
    toDoInput.value = ""
}

toDoListForm.addEventListener("submit", toDoListHandler)
