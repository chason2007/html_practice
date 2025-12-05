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

