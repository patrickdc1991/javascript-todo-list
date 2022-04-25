let items = [];

function update(){
    let itemsElement = document.getElementById("items");
    let totalItems = itemsElement.children.length;
    let completedItems = 0;
    for(let i = 0; i < totalItems; i++){
        if(itemsElement.children[i].querySelector("input[type=\"checkbox\"]").checked){
            completedItems++;
        }
    }
    document.getElementById("infoNumbers").innerHTML = "<h3>" + completedItems + "/" + totalItems + "</h3>";
}

function itemDelete(event){
    let item = event.currentTarget.closest(".item");
    const index = items.indexOf(item);
    if (index > -1) {
        items.splice(index, 1);
    }
    item.remove();
    update();
}

function addItem(){
    let item = document.createElement("div");

    let checkContainer = document.createElement("div");
    let check = document.createElement("input");
    check.setAttribute("type","checkbox");
    check.addEventListener("change", update);
    checkContainer.appendChild(check);

    let textContainer = document.createElement("div");
    let text = document.createElement("input");
    text.setAttribute("type","text");
    text.placeholder = "to do list item...";
    textContainer.appendChild(text);

    let deleteContainer = document.createElement("div");
    let deletePara = document.createElement("p");
    let deleteText = document.createTextNode("x")
    deletePara.appendChild(deleteText);
    deleteContainer.setAttribute("class","deleteButton")
    deleteContainer.addEventListener("click",itemDelete);
    deleteContainer.appendChild(deletePara);

    item.appendChild(checkContainer);
    item.appendChild(textContainer);
    item.appendChild(deleteContainer);
    item.setAttribute("class","item")

    document.getElementById("items").appendChild(item);
    items.push(item);
    update();
}

function init(){
    document.getElementById("addBtn").addEventListener("click", addItem);
}

window.addEventListener("load", init);