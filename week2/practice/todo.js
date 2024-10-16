const todoList = document.querySelector(".todo-list");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");


const deleteTodos = (event) => {
    const target = event.target.parentElement;
    target.remove();
  }

const btnClick = () => {
    const newTodo = document.createElement("li");
    const deleteBtn = document.createElement("button");

    deleteBtn.addEventListener("click", deleteTodos);


    newTodo.textContent = input.value;
    deleteBtn.textContent = "삭제";

    newTodo.appendChild(deleteBtn);
    todoList.appendChild(newTodo);
}


btn.addEventListener("click", btnClick);