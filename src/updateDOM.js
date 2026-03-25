import { showSidebar } from "./sidebar.js";
import { showNavbar } from "./nav.js";
import { displayProjects, showContent, displayTasks, displayActive } from "./content.js";

export const updateDOM = {
    content(){
        showContent();
    },
    sidebar(){
        showSidebar();
    },
    navbar(){
        showNavbar();
    },
    clearContent(){
        const content = document.querySelector("#content");
        while (content.firstChild) {
            content.removeChild(content.firstChild);
        }
    },
    displayProjects(){
        displayProjects();
    },
    displayTasks(){
        displayTasks()
    },
    displayActive(){
        displayActive();
    },
    hideContent(){
        const content = document.querySelector("#content")
        content.classList.add("hide");
    },
    showContent(){
        const content = document.querySelector("#content")
        content.classList.remove("hide");
    },
    refresh(){
        this.clearContent();
        this.content();
        this.navbar();
        this.displayProjects(); 
        this.displayTasks();
        this.showContent();
        this.displayActive();
    }
}