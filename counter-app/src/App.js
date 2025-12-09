import "./App.css"
import Comp1 from "./Comp1";
import Comp2, { Comp3, Comp4 } from "./Component2";

function App() {
  return (
    <div className="App">
      <h1>Learning React</h1>
      <Comp1></Comp1>
      <Comp2></Comp2>
      <Comp3></Comp3>
      <Comp4></Comp4>
    </div>

  );
}

export default App;
