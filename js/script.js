let items = [];

function addItem(){
    let item = document.createElement("div");
    let para = document.createElement("p");
    let text = document.createTextNode("Todo item " + items.length)
    para.appendChild(text);
    item.appendChild(para);
    document.getElementById("items").appendChild(item);
    items.push(item);
}

function init(){
    document.getElementById("addBtn").addEventListener("click", addItem);
}

window.addEventListener("load", init);