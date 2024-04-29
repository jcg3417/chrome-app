const toDoListForm = document.getElementById("todolist input")
console.log(toDoListForm)
const toDoList = document.getElementById("todolist")

const newElement = document.createElement("li")

toDoListForm.addEventListener("submit", toDoListHandler)

function toDoListHandler(event) {
    event.preventDefault()
    let toDoListValue = toDoListForm.value
    // if ((toDoListValue = "")) {
    //     alert("Please input things to do!")
    // } else {
    //     toDoListValue = ""
    }
}
