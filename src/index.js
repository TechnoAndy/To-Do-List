/* eslint-disable linebreak-style */
// css files here
import './styles.css';
import TodoList from './modules/todolist.js';
import * as Element from './modules/elements.js';

const newTask = new TodoList();

const getTick = (element) => ` ${
  element.completed
    ? `<input type="checkbox" aria-label="${element.index}" data-name="status" name="check" checked>`
    : `<input type="checkbox" aria-label="${element.index}" data-name="status" name="check">`
} `;

const showListItem = (element) => `<div class="list show">
                ${getTick(element)}
                <p class="taskdescription ${
  element.completed ? 'strike' : ''
}">${element.description}</p>
               <i class="fa fa-ellipsis-v fa-2x menu-icon" aria-label="${
  element.index
}"  data-name="edit"></i>
          </div>`;

const editDescription = (element) => `<div class="list edit">
                 ${getTick(element)}
                <input type="text" class="desc" value="${
  element.description
}" aria-label ="${element.index}" >
                <i class="fa fa-trash-o fa-2x" aria-label="${
  element.index
}"  data-name="delete"></i>
          </div>`;

const update = () => {
  const list = newTask.listArray;
  let content = '';
  if (list) {
    list.forEach((element) => {
      content += `${
        element.edit ? editDescription(element) : showListItem(element)
      }`;
    });
  }
  Element.listBody.innerHTML = content;
};
update();

// Event Listeners
Element.addList.addEventListener('keydown', (e) => {
  if (e.code === 'Enter') {
    const val = Element.addList.value;
    if (val) {
      newTask.addTask(val);
      Element.addList.value = '';
      update();
    }
  }
});

Element.body.addEventListener('click', (e) => {
  if (e.target.nodeName === 'I') {
    if (e.target.dataset.name === 'edit') {
      newTask.setEdit(e.target.ariaLabel);
      update();
    } else if (e.target.dataset.name === 'delete') {
      newTask.removeTask(parseInt(e.target.ariaLabel, 10));
      update();
    }
  }
});

Element.body.addEventListener('keydown', (e) => {
  if (e.code === 'Enter') {
    if (e.target.value) {
      const id = parseInt(e.target.ariaLabel, 10);
      newTask.editTask(id, e.target.value);
      update();
    }
  }
});

Element.body.addEventListener('change', (e) => {
  if (e.target.dataset.name === 'status') {
    newTask.changeComplete(parseInt(e.target.ariaLabel, 10));
    update();
  }
});

Element.clearlist.addEventListener('click', () => {
  newTask.clearlistCompleted();
  update();
});
