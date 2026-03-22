import { updateDOM } from "./updateDOM.js";
import { projects } from "./storage.js";
import Project from "./projects.js";
import { setItems } from "./storage.js";
import { getItems } from "./storage.js";

const contentBox = document.createElement("div");

export const createNew = (type, input) => {
    const content = document.querySelector("#main-content");
    clearBox();

    const header = document.createElement("h2");
    const close = document.createElement("p");
    close.id = "close";
    close.classList.add("close");
   
    contentBox.id = "card";
    contentBox.classList.add("card");
    content.appendChild(contentBox);
    contentBox.appendChild(header);
    header.textContent = `New ${type}`
    contentBox.appendChild(close);
    close.textContent = "X";
    input.forEach((element) => {
        if (element === "Project"){
            const input = document.createElement("select");
            const header = document.createElement("option"); 
        }
        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = element;
        input.id = (`${element}`).toLowerCase();
        contentBox.appendChild(input);
    })
    const send = document.createElement("button");
    send.textContent = "Create";
    contentBox.appendChild(send);
    send.addEventListener("click", () => {
        if (type === "Project"){
            const UUID = crypto.randomUUID();
            const title = document.querySelector("#title").value;
            const description = document.querySelector("#description").value;
            const item = new Project(title, description, UUID);
            if (projects === null){
                projects[0] = item;
            } else {
            projects[projects.length] = item;
            }
            setItems();
        } 
        if (type === "Task"){

        }
        updateDOM.clearContent();
        updateDOM.showContent("nav", "hero");
        updateDOM.displayProjects();
    })

    close.addEventListener("click", () => {
        updateDOM.clearContent();
        updateDOM.showContent("nav", "hero");
    });
    function clearBox(){
        while (contentBox.firstChild) {
            contentBox.removeChild(contentBox.firstChild);
        }
    }
}