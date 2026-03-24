import { updateDOM } from "./updateDOM.js";
export let projects = [];

export const setItems = () => {
    localStorage.setItem("projects", JSON.stringify(projects));
}
export const getItems = () => {
    projects = JSON.parse(localStorage.getItem("projects"));
    if (projects === null){
        projects = [];
    }
}

export const deleteProject = (itemUUID) => {
    const objIndex = projects.findIndex((obj) => obj.uuid === itemUUID);
    projects.splice(objIndex, 1);
    console.log(objIndex);
    setItems();
    getItems();
    updateDOM.refresh();
}
export const setActive = (itemUUID) => {
    const objIndex = projects.findIndex((obj) => obj.uuid === itemUUID);
    projects.forEach((item) => {
        item.active = false;
    });
    if (projects.length !== 0 && projects[objIndex]){
        projects[objIndex].active = true;
    }
    setItems();
    updateDOM.refresh();
};