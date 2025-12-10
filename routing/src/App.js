import { NavLink, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src="https://img.freepik.com/premium-vector/ph-logo-design_731343-380.jpg"></img>
        <div className="links">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/cart"}>Cart</NavLink>
          <NavLink to={"/search"}>Search</NavLink>
        </div>
      </header>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
