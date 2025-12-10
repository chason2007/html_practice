import { NavLink, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <img src=""></img>
        <div>
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
