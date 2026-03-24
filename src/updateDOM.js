import { showSidebar } from "./sidebar.js";
import { showNavbar } from "./nav.js";
import { displayProjects, showContent } from "./content.js";

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
        const content = document.querySelector("#main-content");
        while (content.firstChild) {
            content.removeChild(content.firstChild);
        }
    },
    displayProjects(){
        displayProjects();
    },
    hideContent(firstElement, secondElement, thirdElement){
        const selection = document.querySelector(`#${firstElement}`);
        selection.classList.add("hide");
        if (secondElement) {
            const selection = document.querySelector(`#${secondElement}`);
            selection.classList.add("hide");
        }
        if (thirdElement) {
            const selection = document.querySelector(`#${thirdElementElement}`);
            selection.classList.add("hide");
        }
    },
    showContent(firstElement, secondElement, thirdElement){
        if (firstElement){
        const selection = document.querySelector(`#${firstElement}`);
        selection.classList.remove("hide");
        }
        if (secondElement) {
            const selection = document.querySelector(`#${secondElement}`);
            selection.classList.remove("hide");
        }
        if (thirdElement) {
            const selection = document.querySelector(`#${thirdElementElement}`);
            selection.classList.remove("hide");
        }
    },
    refresh(){
        this.clearContent();
        this.displayProjects(); 
        this.showContent("nav", "hero");
    }
}