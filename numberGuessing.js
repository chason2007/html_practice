//Instances
let againBtn = document.querySelector(".btn.again")
let number = document.querySelector(".number")
let guess = document.querySelector(".guess")
let checkBtn = document.querySelector(".btn.check")
let score = document.querySelector(".score")
let highScore = document.querySelector(".highscore")
let msg = document.querySelector(".message")

//Generating random num
let randomNumber = Math.trunc(Math.random()*20)+1;

//create a variable score
let s = 20;

let inputVal
//button functionalities
checkBtn.addEventListener("click", () => {
  inputVal = Number(guess.value);
  console.log(randomNumber);
  if(!inputVal){
    document.body.style.backgroundColor = "black";
    msg.textContent = "No value!";
  }
  else if(inputVal === randomNumber){
    document.body.style.backgroundColor = "green";
    number.textContent = randomNumber;
    if (Number(highScore.textContent) < s) highScore.textContent = s;
    msg.textContent = "Value correct!";
  }
  else if(inputVal > randomNumber){
    document.body.style.backgroundColor = "red";
    s-=1;
    score.textContent = s;
    msg.textContent = "Too high!";
  }
  else if(inputVal < randomNumber){
    document.body.style.backgroundColor = "red";
    s-=1;
    score.textContent = s;
    msg.textContent = "Too low!";
  }  
})  //parameters: event, callback fn.

let init=()=>{
  s = 20
  score.textContent = s;
  number.textContent = "?";
  msg.textContent = "Start guessing...";
  randomNumber = Math.trunc(Math.random()*20)+1;
  document.body.style.backgroundColor = "black";
  guess.value = "";
}

againBtn.addEventListener("click", init);