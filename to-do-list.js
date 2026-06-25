console.log("JS connected");

const btn = document.getElementById("btn");
const list = document.getElementById("list");

// LocalStorage se purane tasks load karo
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// LocalStorage update function
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Task ko screen par dikhane ka function
function addTaskToUI(taskText, index) {

    const li = document.createElement("li");
    li.classList.add("item");

    const text = document.createElement("span");
    text.innerText = taskText;

    const delbtn = document.createElement("button");
    delbtn.innerText = "Remove";

    const checkbtn = document.createElement("input");
    checkbtn.type = "checkbox";
    checkbtn.classList.add("checkbox");

    // Delete button
    delbtn.addEventListener("click", () => {
        tasks.splice(index, 1);
        saveTasks();
        li.remove();
    });

    // Complete task
    checkbtn.addEventListener("change", () => {
        text.classList.add("completed");

        setTimeout(() => {
            tasks.splice(index, 1);
            saveTasks();
            li.remove();
        }, 1000);
    });

    li.appendChild(text);
    li.appendChild(delbtn);
    li.appendChild(checkbtn);

    list.appendChild(li);
}

// Page load hote hi saved tasks dikhao
tasks.forEach((task, index) => {
    addTaskToUI(task, index);
});

// Add Task button
btn.addEventListener("click", () => {

    const value = document.getElementById("task").value.trim();

    if (value === "") return;

    // Array me add
    tasks.push(value);

    // LocalStorage update
    saveTasks();

    // UI update
    addTaskToUI(value, tasks.length - 1);

    document.getElementById("task").value = "";
});