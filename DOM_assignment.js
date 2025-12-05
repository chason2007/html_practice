function changeText(){
    document.getElementById("text").innerHTML = "The text has changed!";
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
}

function addItem(){
    let ul = document.getElementById("list");
    let li = document.createElement("li");
    li.textContent = document.getElementById("itemInput").value;
    ul.appendChild(li);
}