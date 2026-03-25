import { updateDOM } from "./updateDOM.js";
import { getItems } from "./storage.js";
import { setItems } from "./storage.js";

getItems();
setItems();

updateDOM.content();
updateDOM.sidebar();
updateDOM.navbar();

updateDOM.displayProjects();
updateDOM.displayTasks();
updateDOM.displayActive();