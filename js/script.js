let items = [];

function addItem(){
    let item = document.createElement("div");

    let checkContainer = document.createElement("div");
    let check = document.createElement("input");
    check.setAttribute("type","checkbox");
    checkContainer.appendChild(check);

    let textContainer = document.createElement("div");
    let para = document.createElement("p");
    let text = document.createTextNode("Todo item " + items.length)
    para.appendChild(text);
    textContainer.appendChild(para);

    let deleteContainer = document.createElement("div");
    let deletePara = document.createElement("p");
    let deleteText = document.createTextNode("x")
    deletePara.appendChild(deleteText);
    deleteContainer.appendChild(deletePara);

    item.appendChild(checkContainer);
    item.appendChild(textContainer);
    item.appendChild(deleteContainer);

    document.getElementById("items").appendChild(item);
    items.push(item);
}

function init(){
    document.getElementById("addBtn").addEventListener("click", addItem);
}

window.addEventListener("load", init);