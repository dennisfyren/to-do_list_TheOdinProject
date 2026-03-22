export let projects = [];
export let tasks = [];

export const setItems = () => {
    localStorage.setItem("projects", JSON.stringify(projects));
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
export const getItems = () => {
    projects = JSON.parse(localStorage.getItem("projects"));
    if (projects === null){
        projects = [];
    }
    tasks = JSON.parse(localStorage.getItem("tasks"));
    console.log(projects);
}