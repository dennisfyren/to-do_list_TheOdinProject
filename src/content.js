import { projects } from "./storage.js";
import { deleteProject, deleteTask, setActive } from "./storage.js";

export const showContent = () => {
    const content = document.querySelector("#content");

    const nav = document.createElement("div");
    nav.id = "nav";
    nav.classList.add("nav");
    content.appendChild(nav);

    const main = document.createElement("div");
    main.id = "main-content";
    main.classList.add("main-content");
    content.appendChild(main);
}
export const displayProjects = () => {
    const content = document.querySelector("#main-content");
    const container = document.createElement("div");
    container.id = "container";
    container.classList.add("container");
    content.appendChild(container);

    if (projects.length !== 0){
    projects.forEach((item) => {
        let itemUUID;
        const box1 = document.createElement("div");
        box1.classList.add("projects")
        container.appendChild(box1);   
        
        for (const [key, value] of Object.entries(item)){
            if (key === "uuid"){
                itemUUID = value;
                box1.id = value;
                continue;
            }
            if (key === "tasks"){
                if (value.length === 0){
                    continue;
                } else {
                    const p = document.createElement("p");
                    p.textContent = `Tasks: ${value.length}`;
                    box1.appendChild(p);
                    continue;
                }
            }
            if (key === "active"){
                continue;
            }
            const p = document.createElement("p");
            p.textContent = `${value}`;
            box1.appendChild(p);
        }
       
        const buttons = document.createElement("div");
        buttons.classList.add("flex");
        box1.appendChild(buttons);
        const removeItem = document.createElement("button");
        removeItem.textContent = "Remove";
        buttons.appendChild(removeItem);

        removeItem.addEventListener("click", () => {
            deleteProject(itemUUID);
        })
        box1.addEventListener("click", () => {
            setActive(itemUUID);
            displayActive();
        })
    })
}} 
export const displayTasks = () => {
    if (projects[0]){
        projects[0].active === true
    };
    const content = document.querySelector("#main-content");
    const container = document.createElement("div");
    container.id = "display-window";
    container.classList.add("display-window");
    content.appendChild(container);

    projects.forEach((project) => {
        if (project.active === true){
            project.tasks.forEach((task) => {
                const div = document.createElement("div");
                const taskUUID = task.uuid;
                const title = document.createElement("p");
                const description = document.createElement("p");
                const priority = document.createElement("p");
                if (task.priority === "1"){
                    div.classList.add("prio-1");
                }
                const dueDate = document.createElement("p");

                title.textContent = task.title;
                description.textContent = task.description;
                priority.textContent = `Priority: ${task.priority}`;
                dueDate.textContent =  `Due Date: ${task.dueDate}`;
                
                container.appendChild(div);
                div.appendChild(title);
                div.appendChild(description);
                div.appendChild(priority);
                div.appendChild(dueDate);

                const button = document.createElement("button");
                button.textContent = "Remove Task";
                div.appendChild(button);

                button.addEventListener("click", () => {
                    deleteTask(taskUUID);
                });
            })
        }
    })
};
export const displayActive = () => {
    const items = document.querySelectorAll(".projects");
    items.forEach((project) => {
        project.classList.remove("selected");
        });
        const objIndex = projects.findIndex((obj) => obj.active === true);  
        if (projects[objIndex]){
        const id = projects[objIndex].uuid;
        if (projects.length !== 0 && projects[objIndex]){    
            const item = document.getElementById(id);
            item.classList.add("selected");
        }
    }
}