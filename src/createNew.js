const contentBox = document.createElement("div");

export const createNew = (type, input) => {
    const content = document.querySelector("#main-content");
    //Removes all children
    clearBox();

    const p = document.createElement("p");
    contentBox.id = "card";
    content.appendChild(contentBox);
    contentBox.appendChild(p);
    p.textContent = `New ${type}`
    input.forEach((element) => {
        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = element;
        contentBox.appendChild(input);
    })
    const send = document.createElement("button");
    send.textContent = "Create";
    contentBox.appendChild(send);

}

function clearBox(){
    while (contentBox.firstChild){
        contentBox.removeChild(contentBox.firstChild);
    }
}