import { createNew } from "./createButton.js";
import { updateDOM } from "./updateDOM.js";
import { projects } from "./storage.js";

export const project = document.createElement("li");
project.id = "create-project";
export const task = document.createElement("li");
task.id = "create-task";
const body = document.querySelector("#body");

export const showNavbar = () => {

    function createButton(){
        const navbar = document.querySelector("#nav");
        const create = document.createElement("div");
        create.id = "create";
        create.classList.add("nav-item");

        navbar.appendChild(create);
        const ul = document.createElement("ul");
        const button = document.createElement("p");
            button.textContent = "New";

            project.textContent = "Project";
            task.textContent = "Task"
        
        create.appendChild(button);
        create.appendChild(ul);
        ul.appendChild(project);
        ul.appendChild(task);
    }

    createButton();

    project.addEventListener("click", () => {
        const params = ["Title", "Description"];
        createNew("Project", params);
        updateDOM.hideContent("nav", "hero");
    });
    
    task.addEventListener("click", () => {
        if (projects.length === 0){
            alert("Please create a project before adding a task.");
            return;
        }
        const params = ["Title", "Description", "Priority", "Due Date", "Project"];
        createNew("Task", params);
        updateDOM.hideContent("nav", "hero");
    })
    
}