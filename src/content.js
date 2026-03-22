import { projects } from "./storage.js";

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
    if (projects !== null){
    projects.forEach((item) => {
        const box = document.createElement("div");
        box.classList.add("projects")
        content.appendChild(box);    
        for (const [key, value] of Object.entries(item)){
            if (key === "uuid"){
                continue;
            }
            if (key === "tasks"){
                if (value.length === 0){
                    continue;
                } else {
                    console.log("hello");
                }
            }
            const p = document.createElement("p");
            p.textContent = `${key}: ${value}`;
            box.appendChild(p);
        }
       
        const edit = document.createElement("button");
        edit.textContent = "Edit";
        box.appendChild(edit);
        const removeItem = document.createElement("button");
        removeItem.textContent = "Remove";
        box.appendChild(removeItem);
    })
}}
