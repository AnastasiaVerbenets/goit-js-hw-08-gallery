const taskList = document.getElementById('taskList');
const input = document.getElementById('newTask');
const form = document.getElementById('taskForm');

form.addEventListener("submit", onTaskList);
taskList.addEventListener("click", onDeleteTask);

function onTaskList(e) {
    e.preventDefault();

    const taskText = input.value.trim();
    if (taskText !== "") {
        taskList.insertAdjacentHTML("beforeend", `<li><input type="checkbox"><span>${taskText}</span><button type="button" class="deleteButton">Delete</button></li>`);
        input.value = '';
    }
}

function onDeleteTask(e) {
    if (e.target.classList.contains("deleteButton")) {
        const taskItem = e.target.closest("li");
        taskItem.remove();
    }
}
