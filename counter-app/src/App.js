import "./App.css"
import Component1 from "./Component1";
import Component, {Component2, Component3} from "./Component2"

function App() {
  return (
    <div className="App">
      <h1>Learning React</h1>
      <Component1></Component1>
      <Component2></Component2>
      <Component></Component>
      <Component3></Component3>
    </div>

  );
}

export default App;
