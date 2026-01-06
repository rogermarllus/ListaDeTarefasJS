let input = document.getElementById("input");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("listArea");
let count = 0;

function addTask() {
  let title = input.value;
  if (title !== "" && title !== null && title !== undefined) {
    let newTask = {
      id: ++count,
      title: title,
      hour: new Date().getHours(),
      minute: new Date().getMinutes(),
      second: new Date().getSeconds(),
    };
    let newTaskElement = `
      <div class="item" id="${newTask.id}" onclick="markTask(${newTask.id})">
        <div class="item-icon"><i id="icon_${newTask.id}" class="bi bi-circle"></i></div>
        <div class="item-title">${newTask.title}</div>
        <div class="item-date">${newTask.hour}:${newTask.minute}:${newTask.second}</div>
        <button class="delete" onclick="deleteTask(${newTask.id})"><i class="bi bi-trash-fill"></i> Excluir</button>
      </div>`;
    main.innerHTML += newTaskElement;
    input.value = "";
    input.focus();
  } else {
    alert("Informe o título da tarefa para adicioná-la!");
  }
}

function deleteTask(id) {
  let task = document.getElementById(id);
  task.remove();
}

function markTask(id) {
  let task = document.getElementById(id);
  let taskClass = task.getAttribute("class");
  let taskIcon = document.getElementById("icon_" + id);
  if (taskClass === "item") {
    task.classList.add("marked");
    taskIcon.classList.remove("bi-circle");
    taskIcon.classList.add("bi-check-circle-fill");
    task.parentNode.appendChild(task);
  } else {
    task.classList.remove("marked");
    taskIcon.classList.remove("bi-check-circle-fill");
    taskIcon.classList.add("bi-circle");
  }
}

input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    btnAdd.click();
  }
});
