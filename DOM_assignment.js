function changeText(){
    document.getElementById("text").innerHTML = "Text changed";
}

function changeColor(){
    document.getElementById("box").style.backgroundColor = "blue";
    document.getElementById("box").style.color = "white";
}

function hideBox(){
    document.getElementById("box").style.display = "none";
}

function showBox(){
    document.getElementById("box").style.display = "block";
    document.getElementById("box").style.display = "flex";
    document.getElementById("box").style.justifyContent = "center";
    document.getElementById("box").style.alignItems = "center";
}

function addItem(){
    let ul = document.getElementById("list");
    let li = document.createElement("li");
    li.textContent = document.getElementById("itemInput").value;
    ul.appendChild(li);
}