import { updateDOM } from "./updateDOM.js";
import Project from "./projects.js";
import Task from "./tasks.js";
import { projects, setItems, setActive } from "./storage.js";

const contentBox = document.createElement("div");

export const createNew = (type, input) => {
    const content = document.querySelector("#body");
    clearBox();

    const header = document.createElement("h2");
    const close = document.createElement("p");
    close.id = "close";
    close.classList.add("close");
   
    contentBox.id = "card";
    contentBox.classList.add("card");
    content.appendChild(contentBox);
    contentBox.appendChild(header);
    header.textContent = `New ${type}`;
    contentBox.appendChild(close);
    close.textContent = "X";
    input.forEach((element) => {
        if (element === "Project"){
            const select = document.createElement("select");
            select.id = (`${element}`).toLowerCase();
            select.appendChild(header);
            contentBox.appendChild(select);
            projects.forEach((item) => {
                const list = document.createElement("option");
                list.textContent = item.title;
                select.appendChild(list);
            })
            return;
        }
        if (element === "Due Date"){
            const picker = document.createElement("input");
            picker.type = "date";
            picker.id = "dueDate";
            contentBox.appendChild(picker);
            return;
        }
        if (element === "Priority"){
            const select = document.createElement("select");
            select.id = "priority";
            for (let i = 1; i < 4; i++){
                const option = document.createElement("option");
                option.textContent = `${i}`;
                select.appendChild(option);
            } 
            contentBox.appendChild(select);
            return;
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
            setActive(UUID);
            setItems();
        } 
        if (type === "Task"){
            const UUID = crypto.randomUUID();
            const title = document.querySelector("#title").value;
            const description = document.querySelector("#description").value;
            const priority = document.querySelector("#priority").value;
            const dueDate = document.querySelector("#dueDate").value;
            const project = document.querySelector("#project").value;

            const item = new Task(title, description, priority, dueDate, project);
            const objAtIndex = projects.findIndex((obj) => obj.title === project);

            projects[objAtIndex].tasks.push(item);
        }
        setItems();
        body.removeChild(body.lastChild);
        updateDOM.refresh();
    })

    close.addEventListener("click", () => {
        const body = document.querySelector("#body");
        body.removeChild(body.lastChild);
        updateDOM.refresh();
    });
    function clearBox(){
        while (contentBox.firstChild) {
            contentBox.removeChild(contentBox.firstChild);
        }
    }
}