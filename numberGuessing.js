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
  if(inputVal === randomNumber){
    document.body.style.backgroundColor = "green";
    number.textContent = randomNumber;
    highScore.textContent = s;
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
  else{
    document.body.style.backgroundColor = "black";
    msg.textContent = "No value!";
  }
})  //parameters: event, callback fn.