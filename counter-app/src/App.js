import "./App.css"
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
import Comp3 from "./Comp3";
import Comp4 from "./Comp4";
import Comp5 from "./Comp5";
import { NamedComp1, NamedComp2, NamedComp3, NamedComp4, NamedComp5 } from "./NamedComps";

const msg = "Hello world!!!!";
function App() {
  return (
    <div className="App">
      <h1>Learning React</h1>
      <Comp1 age={21} myMsg={msg}></Comp1>
      <Comp2></Comp2>
      <Comp3></Comp3>
      <Comp4></Comp4>
      <Comp5></Comp5>
      <NamedComp1></NamedComp1>
      <NamedComp2></NamedComp2>
      <NamedComp3></NamedComp3>
      <NamedComp4></NamedComp4>
      <NamedComp5></NamedComp5>
    </div>

  );
}

export default App;
