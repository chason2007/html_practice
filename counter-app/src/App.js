import "./App.css";
import React, { useState } from "react";

function App() {
  //1. Variable 2. Function
  const [val, setVal] = useState(0);

  const handleIncrement = () => {
    setVal(val+1);
  };

  const handleDecrement = () => {
    setVal((val) => Math.max(val - 1, 0));
  };

  return (
    <div className="App">
      <div className="counter">
        <h1>{val}</h1>
        <div className="buttons">
          <button className="inc" onClick={handleIncrement}>
            Increment
          </button>
          <button className="dec" onClick={handleDecrement}>
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
