// constant declared for input button and task list section
const taskInput = document.querySelector("#newtask input");
const taskSection = document.querySelector('.tasks'); // Changed to 'tasks' to match CSS

// listener for the Enter key. adds new task
taskInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        createTask();
    }
});

// the onclick event for 'Add' button
document.querySelector('#push').onclick = function() {
    createTask();
};

// the function that creates a task
function createTask() {
    if (taskInput.value.length === 0) {
        alert("The task field is blank. Enter a task name and try again.");
    } else {
        // this code block inserts HTML that creates each task into the task area div element.
        taskSection.innerHTML += `
        <div class="task">
            <label class="taskname">
                <input onclick="updateTask(this)" type="checkbox" class="check-task">
                <p>${taskInput.value}</p>
            </label>
            <div class="delete">
                <i class="uil uil-trash"></i>
            </div>
        </div>`;

        // Clear the task input field after adding the task
        taskInput.value = '';

        var currentTasks = document.querySelectorAll(".delete");
        for (var i = 0; i < currentTasks.length; i++) {
            currentTasks[i].onclick = function() {
                this.parentNode.remove();
                taskSection.offsetHeight >= 300 ? taskSection.classList.add("overflow") : taskSection.classList.remove("overflow");
            };
        }
    }
}

function updateTask(task) {
    let taskItem = task.nextElementSibling; // Changed to nextElementSibling to target the <p> element
    if (task.checked) {
        taskItem.classList.add("checked");
    } else {
        taskItem.classList.remove("checked");
    }
}


