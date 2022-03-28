document.getElementById('formTask').addEventListener('submit', saveTask);

function saveTask(e) {
  let title = document.getElementById('title').value;
  let description = document.getElementById('description').value;
  console.log(description)

  let task = {
    title,
    description
  };
  

  if(localStorage.getItem('tasks') === null) {
    let tasks = [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  } else {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  getTasks();
  document.getElementById('formTask').reset();
  e.preventDefault();
}

function deleteTask(title) {
  console.log(title)
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  for(let i = 0; i < tasks.length; i++) {
    if(tasks[i].title == title) {
      tasks.splice(i, 1);
    }
  }
  
  localStorage.setItem('tasks', JSON.stringify(tasks));
  getTasks();
}


function getTasks() {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  let tasksView = document.getElementById('tasks');
  tasksView.innerHTML = '';
  for(let i = 0; i < tasks.length; i++) {
    let title = tasks[i].title;
    let description = tasks[i].description;

    tasksView.innerHTML += `<div class="card mb-3">
        <div class="card-body">
          <p>${title} - ${description}
          <a href="#" onclick="deleteTask('${title}')" class="btn btn-danger ml-5">Delete</a>
          </p>
        </div>
      </div>`;
  }
}
getTasks();

const boton = document.getElementById('boton') 

boton .addEventListener('click', () => {

  Toastify({
    text: "Tu tarea se ha guardado!",
    duration: 2000,
    gravity: "bottom", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    style: {
      background: "linear-gradient(to top, #00b09b, #00b59b)",
    },
    

  }).showToast();
})






