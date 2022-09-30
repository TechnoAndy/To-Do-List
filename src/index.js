/* eslint-disable linebreak-style */
import './styles.css';

const tasks = [

  {
    id: 1,
    task: 'Attend morning session meeting',
    completed: true,
  },
  {
    id: 2,
    task: 'Join coding partner session',
    completed: true,
  },
  {
    id: 3,
    task: 'Complete daily tasks',
    completed: false,
  },
  {
    id: 4,
    task: 'Attend standup meeting',
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
