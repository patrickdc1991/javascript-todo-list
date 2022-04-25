let items = [];

function update(){
    let itemsElement = document.getElementById("items");
    let totalItems = itemsElement.children.length;
    let completedItems = 0;
    for(let i = 0; i < items.length; i++){
        if(items[i].querySelector("input[type=\"checkbox\"]").checked){
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
    checkContainer.setAttribute("class","checkContainer")
    checkContainer.appendChild(check);

    let textContainer = document.createElement("div");
    let text = document.createElement("input");
    text.setAttribute("type","text");
    text.placeholder = "to do list item...";
    textContainer.setAttribute("class","textContainer")
    textContainer.appendChild(text);

    let deleteButton = document.createElement("input");
    deleteButton.setAttribute("type","button");
    deleteButton.setAttribute("value",String.fromCharCode(0x00D7));
    deleteButton.setAttribute("class","deleteButton");
    deleteButton.addEventListener("click",itemDelete);

    let clearBoth = document.createElement("div");
    clearBoth.setAttribute("class","clearBoth")

    item.appendChild(checkContainer);
    item.appendChild(textContainer);
    item.appendChild(deleteButton);
    item.appendChild(clearBoth);
    item.setAttribute("class","item")

    document.getElementById("items").appendChild(item);
    items.push(item);
    update();
}

function init(){
    document.getElementById("addBtn").addEventListener("click", addItem);
}

window.addEventListener("load", init);