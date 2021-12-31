//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
//Functions

function addTodo(e) {
  e.preventDefault();
  //todo DIV
  const todoDiv = document.createElement("div"); // created element
  todoDiv.classList.add("todo"); // added class

  //Create LI
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  todoInput.value = "";
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo); // apending this element inside ul element
  //Check Mark Button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  //Check Trash Button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  //Append to LIST
  todoList.appendChild(todoDiv);
}

function deleteCheck(e) {
  e.preventDefault();
  const item = e.target;
  //DELETE TODO
  if (item.classList[0] === "trash-btn" || item.classList[1] === "fa-trash") {
    var parent = item.parentElement;
    if (parent.classList[0] === "trash-btn") {
      var newParent = parent.parentElement;
      newParent.remove();
    } else {
      parent.remove();
    }
    // parent.remove();
  } else if (
    item.classList[0] === "complete-btn" ||
    item.classList[1] === "fa-check"
  ) {
    // CHECK TODO
    var parent = item.parentElement;
    var textNode;
    if (parent.classList[0] === "complete-btn") {
      var newParent = parent.parentElement;
      textNode = newParent.childNodes[0];
      textNode.classList.add("checked");
    } else {
      textNode = parent.childNodes[0];
      textNode.classList.add("checked");
    }
  }
}
