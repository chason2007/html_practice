import './App.css';
import { NavLink, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch('/Data.json')
      .then(response => response.json())
      .then(jsonData => setData(jsonData.students))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  
  return (
    <div className="App">
      <header style={{display: 'flex', gap: '1rem', padding: '1rem', backgroundColor: '#f0f0f0'}}>
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
