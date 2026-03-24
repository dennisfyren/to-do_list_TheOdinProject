import { projects } from "./storage.js";
import { tasks } from "./storage.js";
import { deleteProject, setActive, getItems, setItems } from "./storage.js";
import { updateDOM } from "./updateDOM.js";


export const showContent = () => {
    const content = document.querySelector("#content");

    const hero = document.createElement("div");
    hero.id = "hero";
    hero.classList.add("hero");
    content.appendChild(hero);

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
    content.classList.add("flex-column");
    const container = document.createElement("div");
    container.classList.add("container");

    if (projects.length !== 0){
    projects.forEach((item) => {
        let itemUUID;
        content.appendChild(container);
        const box1 = document.createElement("div");
        box1.classList.add("projects")
        container.appendChild(box1);   
        for (const [key, value] of Object.entries(item)){
            if (key === "uuid"){
                itemUUID = value;
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
        const edit = document.createElement("button");
        edit.textContent = "Edit";
        //buttons.appendChild(edit);
        const removeItem = document.createElement("button");
        removeItem.textContent = "Remove";
        buttons.appendChild(removeItem);

        removeItem.addEventListener("click", () => {
            deleteProject(itemUUID);
        })
        box1.addEventListener("click", () => {
            setActive(itemUUID);
        })
    })
}}  
