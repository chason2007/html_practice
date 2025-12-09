import "./App.css"
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
import Comp3 from "./Comp3";
import Comp4 from "./Comp4";
import Comp5 from "./Comp5";
import GrandFather from "./GrandFather";
import { NamedComp1, NamedComp2, NamedComp3, NamedComp4, NamedComp5 } from "./NamedComps";

const msg = "Hello world!!!!";
function App() {
  return (
    <div className="App">
      <h1>Learning React</h1>
      <h1>0</h1>
      <div className="buttons">
        <button className = "inc">Increment</button>
        <button className = "dec">Decrement</button>
      </div>
    </div>

  );
}

export default App;
