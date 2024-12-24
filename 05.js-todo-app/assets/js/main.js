const addBtn = document.querySelector(".add");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");
const clearBtn = document.querySelector(".clear-todos");
const filterTodos = document.querySelector(".filter-todos");
const errorMessage = document.querySelector(".error-message");

// const todos = [];
let todos = [];

showNoTodosMessage();
showPendingCount();
function handleAddTodo() {
  if (todoInput.value) {
    const todo = {
      id: Date.now(),
      todoText: todoInput.value.trim(),
      createdAt: new Date().toLocaleString(),
      isCompleted: false,
    };

    //   todos.push(todo);
    todos = [...todos, todo];
    errorMessage.classList.replace("d-block", "d-none");
    todoInput.classList.remove("border-danger");

    renderTodoList(todos);
    showNoTodosMessage();
    showPendingCount();
  } else {
    errorMessage.classList.replace("d-none", "d-block");
    todoInput.classList.add("border-danger");
  }

  resetTodoInput();
}
addBtn.addEventListener("click", handleAddTodo);

// function renderTodoList(arr) {
//   todoList.innerHTML = "";
//   arr.forEach((todo) => {
//     todoList.innerHTML += `
//          <li
//           class="list-group-item list-group-item-primary d-flex justify-content-between align-items-center mb-3"
//         >
//           <div>
//             <input class="form-check-input" type="checkbox" />

//             <span>${todo.todoText}</span>
//           </div>
//           <div class="actions">
//             <button class="btn btn-danger">
//               <i class="fa-solid fa-trash-can"></i>
//             </button>
//             <button class="btn btn-success">
//               <i class="fa-solid fa-pen-to-square"></i>
//             </button>
//           </div>
//         </li>
//     `;
//   });
// }
function renderTodoList(arr) {
  todoList.innerHTML = "";
  arr.forEach((todo) => {
    const liELem = document.createElement("li");
    liELem.className =
      "list-group-item list-group-item-primary d-flex justify-content-between align-items-center mb-3";

    const todoContent = document.createElement("div");
    todoContent.classList.add("d-flex", "gap-2");
    const checkBox = document.createElement("input");

    checkBox.checked = todo.isCompleted;
    checkBox.addEventListener("change", (e) => {
      console.log(e.target.checked);
      todo.isCompleted = e.target.checked;

      renderTodoList(todos);
      showPendingCount();
    });
    checkBox.setAttribute("type", "checkbox");
    checkBox.className = "form-check-input";
    const text = document.createElement("p");

    const textSpan = document.createElement("span");

    todo.isCompleted && textSpan.classList.add("completed");

    const dateSpan = document.createElement("span");
    dateSpan.style.fontStyle = "italic";
    textSpan.textContent = todo.todoText;
    dateSpan.textContent = todo.createdAt;

    const actions = document.createElement("div");
    actions.classList.add("d-flex", "gap-2");
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    deleteBtn.className = "btn btn-danger";

    deleteBtn.addEventListener("click", () => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          deleteTodo(todo.id);
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
    });

    const editBtn = document.createElement("button");
    editBtn.innerHTML = `  <i class="fa-solid fa-pen-to-square"></i>`;
    editBtn.className = "btn btn-success";

    text.append(textSpan, dateSpan);
    todoContent.append(checkBox, text);
    actions.append(deleteBtn, editBtn);

    liELem.append(todoContent, actions);

    todoList.append(liELem);
  });
}

function showNoTodosMessage() {
  const noTodosMessage = document.querySelector(".no-todos-message");
  // noTodosMessage.classList.toggle("d-none", todos.length != 0);

  if (todos.length == 0) {
    noTodosMessage.classList.remove("d-none");
  } else {
    noTodosMessage.classList.add("d-none");
  }
}

function showPendingCount() {
  const pendingCount = document.querySelector(".pending-count");
  const pendingTodos = todos.filter((todo) => !todo.isCompleted);
  pendingCount.textContent = pendingTodos.length;
}
function deleteTodo(todoId) {
  todos = todos.filter((todo) => todo.id !== todoId);
  renderTodoList(todos);
  showNoTodosMessage();
  showPendingCount();
}
function resetTodoInput() {
  todoInput.value = "";
}

todoInput.addEventListener("keyup", (e) => {
  if (e.target.value.trim()) {
    todoInput.classList.remove("border-danger");
    errorMessage.classList.replace("d-block", "d-none");
  } else {
    todoInput.classList.add("border-danger");
    errorMessage.classList.replace("d-none", "d-block");
  }
});

window.addEventListener("keyup", (e) => {
  // console.log(e.code);
  if (e.code === "Enter") {
    handleAddTodo();
  }
});
clearBtn.addEventListener("click", () => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      // todos.length = 0;
      todos = [];
      renderTodoList(todos);
      showNoTodosMessage();
      showPendingCount();

      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
    }
  });
});

filterTodos.addEventListener("change", (e) => {
  let filtered = null;
  switch (e.target.value) {
    case "completed":
      filtered = todos.filter((todo) => todo.isCompleted);
      break;
    case "pending":
      filtered = todos.filter((todo) => !todo.isCompleted);

      break;

    default:
      filtered = [...todos];
      break;
  }

  renderTodoList(filtered);
});
