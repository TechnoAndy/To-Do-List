/* eslint-disable linebreak-style */
import './styles.css';

const tasks = [

  {
    id: 1,
    task: 'Morning Run',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn Javasript',
    completed: true,
  },
  {
    id: 3,
    task: 'learn React js',
    completed: false,
  },
  {
    id: 4,
    task: 'Play football',
    completed: false,
  },
];

const toDo = document.getElementById('todo-list');

function TaskObject() {
  let workout = '';
  tasks.forEach((job) => {
    workout += `
                <div class="list">
                    <input type="checkbox">
                    <p>${job.task}</p>
               
           <a><i class="fa fa-ellipsis-v fa-2x" aria-hidden="true"></i>
                    </a>
                </div>`;
  });
  toDo.innerHTML = workout;
}
TaskObject();
