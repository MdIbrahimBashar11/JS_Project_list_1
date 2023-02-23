const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');

let todos = [];

form.addEventListener('submit', e => {
  e.preventDefault();

  const todoText = input.value.trim();

  if (todoText === '') {
    return;
  }

  const todo = {
    id: new Date().getTime(),
    text: todoText,
    completed: false
  };

  todos.push(todo);

  input.value = '';

  renderTodos();
});

todoList.addEventListener('click', e => {
  if (!e.target.matches('button')) {
    return;
  }

  const todoId = parseInt(e.target.parentNode.dataset.todoId);

  todos = todos.filter(todo => todo.id !== todoId);

  renderTodos();
});

function renderTodos() {
  todoList.innerHTML = '';

  todos.forEach(todo => {
    const li = document.createElement('li');
    li.dataset.todoId = todo.id;

    const span = document.createElement('span');
    span.innerText = todo.text;

    const button = document.createElement('button');
    button.innerText = 'Delete';

    li.appendChild(span);
    li.appendChild(button);

    todoList.appendChild(li);
  });
}
