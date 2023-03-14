import MyTodo from './todo.js';

const getLocalStorage = () => {
  const storage = JSON.parse(localStorage.getItem('listStorage')) || [];
  return storage;
};

const showTodo = () => {
  const allTodoList = document.getElementById('todoList');
  allTodoList.replaceChildren();
  getLocalStorage().forEach((item, id) => {
    let isCompleted;
    if (item.completed === true) {
      isCompleted = 'checked';
    }
    allTodoList.innerHTML += `
      <div class="myList">
        <input id='check-${id}', "completed")' type='checkbox' ${item.Checked ? 'true' : 'false'} onChange='updateList(${id}, "completed")' ${isCompleted}>
        <input onkeyup='updateList(${id})' type="text" id='inputField-${id}' value='${item.description}' />
        <i class=" delete fa fa-trash" aria-hidden="true" onclick='removeList(${item.index})' id='delete-${item.index}'></i>
      </div>
        `;
  });
};

const addTodo = (description, completed, index) => {
  const addedTask = new MyTodo(description, completed, index);
  const task = getLocalStorage();
  task.push(addedTask);
  localStorage.setItem('listStorage', JSON.stringify(task));

  showTodo();
};

const reAssignIndex = (filteredArray) => {
  filteredArray.forEach((item, i) => {
    item.index = i + 1;
  });
};

const removeList = (id) => {
  const filteredArray = getLocalStorage().filter((item) => {
    if (item.index !== id) {
      return item;
    }
    return '';
  });
  reAssignIndex(filteredArray);
  localStorage.setItem('listStorage', JSON.stringify(filteredArray));

  showTodo();
};

const updateList = (id) => {
  const updateInput = document.querySelector(`#inputField-${id}`).value;
  const updateArray = getLocalStorage().map((item) => {
    if (item.index - 1 === id) {
      item.description = updateInput;
    }
    if (item.index - 1 === id) {
      item.completed = true;
    }
    if (item.index - 1 === !id) {
      item.completed = true;
    }
    return item;
  });
  localStorage.setItem('listStorage', JSON.stringify(updateArray));
};

const updateCheckBox = (id) => {
  const inputBox = document.querySelector(`#inputField-${id}`).value;
  const updateBox = getLocalStorage().map((item) => {
    if (item.index - 1 === id) {
      item.completed = inputBox;
    }
    return item;
  });
  localStorage.setItem('listStorage', JSON.stringify(updateBox));
};

export {
  getLocalStorage, addTodo, showTodo, updateList, removeList, updateCheckBox,
};