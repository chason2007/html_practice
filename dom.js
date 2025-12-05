//Tag selector
let tag = document.getElementsByTagName("h1")
console.log(tag[0]) //returns htmlCollection array

//class selector
let classs = document.getElementsByClassName("a");
console.log(classs[0]) //return htmlCollection array

//id selector
let id = document.getElementById("name")
console.log(id); //returns first instance of given id

//query selector (works on all 3 selectors)
let query = document.querySelector(".b");
console.log(query) //returns first instance of given query

//query selector all
let allquery = document.querySelectorAll(".b")
console.log(allquery) //returns nodeList array


//read and write operation
let head = document.querySelector("h1")
console.log(head.textContent);

//Write operation
head.textContent = "New para content"

let div = document.querySelector("div")
div.innerHTML = "<p>Hello from para</p>"
//div.textContent = "<p>Hello from para</p>"
console.log(div.textContent)
console.log(div.innerHTML);

//add/remove/toggle class
let headclass = document.querySelector("h1")
headclass.classList.add("color")
headclass.classList.remove("border")
head.classList.toggle("background")

//styling
let p = document.querySelector("p")
p.style.color = "red"
p.style.backgroundColor = "green"

//creating element
let ul = document.createElement("ul")
let lii = document.createElement("li")
lii.textContent = "Item 1"
let li1 = document.createElement("li")
li1.textContent = "Item 2"
ul.appendChild(lii);
ul.appendChild(li1);

document.body.appendChild(ul);
let arr = ["apple", "banana", "mango"]
arr.forEach((element)=>{
    let lo = document.createElement("li");
    lo.textContent = element
    ul.appendChild(lo);
});
