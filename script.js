const formInput = document.getElementById("form-input")
const form = document.querySelector("#form")
const list = document.getElementById("list")
const template = document.querySelector("#template")

// functions
function renderTodo(input) {
  const templateClone = template.content.cloneNode(true)

  const textEl = templateClone.querySelector("[data-list-item-text]")
  textEl.textContent = input
  list.appendChild(templateClone)
}
function completeTodo() {
  const todoContent = list.querySelector("[data-list-item-text]")
  todoContent.style.color = "rgb(0, 0, 0, 0.3)"
  todoContent.style.textDecoration = "line-through"
}

/// event listener
form.addEventListener("submit", function (e) {
  e.preventDefault()
  const todoName = formInput.value
  if (todoName === "") return

  renderTodo(todoName)
  formInput.value = ""
  formInput.focus()
  const checkbox = list.querySelector("[data-list-item-checkbox]")
  const deleteBtn = list.querySelector("[data-button-delete]")
  checkbox.addEventListener("click", completeTodo)
})
