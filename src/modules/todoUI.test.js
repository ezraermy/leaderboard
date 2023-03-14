import {
  addTodo, updateList, removeList, updateCheckBox,
} from './todoUI.js';
import clearCompleted from './clearCompleted.js';

document.body.innerHTML = `
<div class="container">
<form id="inputForm" class="input-field">
    <input type="text" id="inputField" class="input" placeholder="Add to your list..."><button id="addTodo" class="btn"><i class='fas fa-arrow-left'></i></button>
</form><hr>
<ul id="todoList" class="my-todos">         
</ul>
<div>
   <button id="clear" class="clr-btn"><p>Clear all complated</p></button>
</div>  
</div>
`;

describe('Adding and deleting todo list', () => {
  // Adding todo list test
  test('Adding one todo list, should have one todo list', () => {
    addTodo('Cooking pasta for lunch', true, 0); // Arrange
    const data = document.querySelectorAll('.myList'); // Act
    expect(data).toHaveLength(1); // Assert
  });

  test('If we add second todo list, it should have two todo list', () => {
    addTodo('Cleaning my room', false, 1); // Arrange
    const data = document.querySelectorAll('.myList'); // Act
    expect(data).toHaveLength(2); // Assert
  });

  // Removing todo list test
  test('when we remove a todo list it should remove one todo list', () => {
    removeList(0); // Arrange
    const data = document.querySelectorAll('.myList'); // Act
    expect(data).toHaveLength(1); // Assert
  });

  // Update todo list test
  test('Update one todo list', () => {
    document.querySelectorAll('#inputField-0').value = 'Cleaning my room';
    updateList(0); // Arrange
    const data = JSON.parse(localStorage.getItem('listStorage'));
    const checkData = data.filter((item) => item.index === 1); // Act
    expect(checkData[0].description).toBe('Cleaning my room'); // Assert
  });

  // Update checked box
  test('Update checked box', () => {
    document.querySelectorAll('#check-0').Checked = true;
    updateCheckBox(0); // Arrange
    const data = JSON.parse(localStorage.getItem('listStorage'));
    const checkBox = data.filter((item) => item.index === 1); // Act
    expect(checkBox[0].completed).toBeTruthy(); // Assert
  });

  // Clear complated todo list
  test('Clear all compated todo list', () => {
    clearCompleted(); // Arrange
    const data = JSON.parse(localStorage.getItem('listStorage'));
    const checkBox = data.filter((item) => item.index === true); // Act
    expect(checkBox).toHaveLength(0); // Assert
  });
});
