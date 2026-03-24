import Task from "./tasks.js";
const contentBox = document.createElement("div");

export default class Project {
    constructor(title, description, uuid){
        this.title = title;
        this.description = description;
        this.uuid = uuid;
        this.tasks = [];
        this.active = false;
    }
    addTask(title, description, priority, dueDate){
        const task = new Task(title, description, priority, dueDate);
        this.tasks[this.tasks.length] = task;
    }
}

