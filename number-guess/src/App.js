import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  let [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 20) + 1
  );
  let [msg, setMsg] = useState("Start guessing...");
  let [score, setScore] = useState(20);
  let [highscore, setHighscore] = useState(0);
  let [displayNumber, setDisplayNumber] = useState("?");
  let [guess, setGuess] = useState("");
  let [bg, setBg] = useState("#000000");

  let checkBtn=() => {
    let inputValue = Number(guess);
    if (!inputValue) {
      setMsg("No Number");
    } else if (inputValue === randomNumber) {
      setMsg("Correct Value");
      setDisplayNumber(randomNumber);
      setBg("#60b347");
      if (score > highscore) {
        setHighscore(score);
      }
    } else if (inputValue !== randomNumber) {
      if (score > 1) {
        setMsg(inputValue > randomNumber ? "Too High!" : "Too Low!");
        setScore(score - 1);
      } else {
        setMsg("You Lost the Game");
        setScore(0);
      }
    }
  };

  let init=() => {
    setScore(20);
    setRandomNumber(Math.floor(Math.random() * 20) + 1);
    setMsg("Start guessing...");
    setDisplayNumber("?");
    setGuess("");
    setBg("#000000");
  };

  return (
    <div className="App" style={{ backgroundColor: bg }}>
      <header>
        <h1>Guess My Number!</h1>
        <p class="between">(Between 1 and 20)</p>
        <button class="btn again" onClick={init}>Again!</button>
        <div class="number">{msg === "Correct Value" ? randomNumber : "?"}</div>
      </header>
      <main>
        <section class="left">
          <input
            type="number"
            class="guess"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
          />
          <button class="btn check" onClick={checkBtn}>Check!</button>
        </section>
        <section class="right">
          <p class="message">{msg}</p>
          <p class="label-score">
            💯 Score: <span class="score">{score}</span>
          </p>
          <p class="label-highscore">
            🥇 Highscore: <span class="highscore">{highscore}</span>
          </p>
        </section>
            
      </main>
    </div>
  );
}

export default App;
