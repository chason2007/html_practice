import './App.css';
import { NavLink, Outlet } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  
  return (
    <div className="App">
      <header className="header">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/registrationhooks"}>Registration Using Hooks</NavLink>
        <NavLink to={"/registration"}>Registration without Hooks</NavLink>
      </header>
      <Outlet context={{
        data,
        setData,
      }}></Outlet>
    </div>
  );
}

export default App;
