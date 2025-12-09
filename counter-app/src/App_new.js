import "./App.css";
import React, { useState } from "react";
import Counter from "./Counter";
import ButtonContainer from "./ButtonContainer";

function App() {
  //1. Variable 2. Function
  const [val, setVal] = useState(0);

  const handleIncrement = () => {
    setVal(val + 1);
  };

  const handleDecrement = () => {
    setVal((val) => Math.max(val - 1, 0));
  };

  return (
    <div className="App">
      <div className="counter">
        <Counter val={val} />
        <ButtonContainer onIncrement={handleIncrement} onDecrement={handleDecrement} />
      </div>
    </div>
  );
}

export default App;
