import "./App.css";
import React, { useEffect, useState } from "react";
import Counter from "./Counter";

function App() {
  const [val, setVal] = useState(0);

  const handleIncrement = () => {
    setVal(val + 1);
  };

  const handleDecrement = () => {
    setVal(val-1);
  };

  useEffect(() => {
    if(val<0){
      setTimeout(() => {
        setVal(0);
      }, 2000);
    }
  }, [val]);



  // // side effects
  // //Args: 1. Callback fn 2. Dependency array(props or state)
  // // 1. with empty dependency array -> runs once after initial render
  // // 2. with specific state/props -> runs when that specific state/props changes
  // // 3. with no dependency array -> runs after every render with dependency array
  // useEffect(() => {
  //   console.log("UseEffect - run once after initial render");
  // }, []);
  
  // useEffect(() => {
  //   console.log("UseEffect - with array of depensencies");
  // }, [val]);

  // useEffect(() => {
  //   console.log("UseEffect - without array");
  // });
  return (
    <div className="App">
      <Counter 
        val={val} 
        handleIncrement={handleIncrement} 
        handleDecrement={handleDecrement} 
      />
    </div>
  );
}

export default App;