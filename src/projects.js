import Task from "./tasks.js";
const contentBox = document.createElement("div");

export default class Project {
    constructor(title, description){
        this.title = title;
        this.description = description;
        this.tasks = [];
    }
    addTask(title, description, priority, dueDate){
        const task = new Task(title, description, priority, dueDate);
        this.tasks[this.tasks.length] = task;
    }
}

