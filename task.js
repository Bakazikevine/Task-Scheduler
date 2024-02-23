class Task {
    constructor(title, description, dueDate) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.done = false;
    }
}

class TaskScheduler {
    constructor() {
        this.tasks = [];
    }

    addTask(title, description, dueDate) {
        const newTask = new Task(title, description, dueDate);
        this.tasks.push(newTask);
    }

    displaySortedTasksByDueDate() {
        const sortedTasks = this.tasks.slice().sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
        sortedTasks.forEach(task => {
            console.log(`${task.title} - Due Date: ${task.dueDate} - done: ${task.completed ? 'Yes' : 'No'}\n`);
        });
    }

    updateTask(title, newTitle, newDescription, newDueDate, done) {
        const taskIndex = this.tasks.findIndex(task => task.title === title);
        if (taskIndex !== -1) {
            const updatedTask = this.tasks[taskIndex];
            updatedTask.title = newTitle || updatedTask.title;
            updatedTask.description = newDescription || updatedTask.description;
            updatedTask.dueDate = newDueDate || updatedTask.dueDate;
            if (done !== undefined) {
                updatedTask.done = done;
            }
        } else {
            console.log("No task found.");
        }
    }

    removeTask(title) {
        this.tasks = this.tasks.filter(task => task.title !== title);
    }
}

// creating object

const scheduler = new TaskScheduler();

// Adding tasks
scheduler.addTask("Task 1", "use of constant keyword ?", "2024-03-01");
scheduler.addTask("Task 2", "explain array methods ?", "2024-02-27");
scheduler.addTask("Task 3", "what is the use of loop ?", "2024-03-07");

// Displaying tasks sorted by due date
console.log("Tasks sorted by due date:");
scheduler.displaySortedTasksByDueDate();

// Updating task
scheduler.updateTask("Task 1", "Updated Task 1", "Updated Description", "2024-03-06", true);

// Displaying tasks sorted by due date after update
console.log("\nTasks sorted by due date after update:");
scheduler.displaySortedTasksByDueDate();

// Removing task
scheduler.removeTask("Task 2");

// Displaying tasks sorted by due date after removal
console.log("\nTasks sorted by due date after removal:");
scheduler.displaySortedTasksByDueDate();

