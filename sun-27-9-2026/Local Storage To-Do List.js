// --- Exercise 14: Local Storage To-Do List Solution ---

// Initial tasks array or loaded from localStorage
let tasksList = JSON.parse(localStorage.getItem("tasks")) || [
    { id: 1, text: "Check oxygen levels", completed: false }
];

// Function to save and sync tasks with localStorage
function saveAndRenderTasks() {
    // 1. Store array as JSON string
    localStorage.setItem("tasks", JSON.stringify(tasksList));
    console.log("Total tasks saved:", tasksList.length);
}

// 2. Add a new task
function addTask(text) {
    let newTask = { id: Date.now(), text: text, completed: false };
    tasksList.push(newTask);
    saveAndRenderTasks();
}

// 3. Mark task as completed
function toggleTask(id) {
    tasksList = tasksList.map(task => {
        if (task.id === id) {
            return { ...task, completed: !task.completed };
        }
        return task;
    });
    saveAndRenderTasks();
}

// 4. Delete individual task
function deleteTask(id) {
    tasksList = tasksList.filter(task => task.id !== id);
    saveAndRenderTasks();
}

// Test running operations:
addTask("Calibrate navigation sensors");
console.log("Tasks after adding:", JSON.parse(localStorage.getItem("tasks")));