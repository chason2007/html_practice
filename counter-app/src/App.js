import "./App.css";
import React, { useEffect, useState } from "react";
import Counter from "./Counter";

function App() {
  const [val, setVal] = useState(0);
  let [data, setData] = useState(null);
  const handleIncrement = () => {
    setVal(val + 1);
  };

  const handleDecrement = () => {
    setVal(Math.max(val - 1, 0));
  };

  useEffect(() => {
    if (val < 0) {
      let timer = setTimeout(() => {
        setVal(0);
      }, 2000);
      //cleanup function
      return () => {
        clearTimeout(timer);
      };
    }
  }, [val]);

  //fetching api
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const fetchData = await response.json();
        setData(fetchData);
      } catch (err) {
        console.log("Error fetching data:", err);
      }
    };
    fetchApi();
  }, []);
  console.log(data);

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
      <table border="2" style={{ margin: "auto", marginTop: "20px", borderCollapse: "collapse" }}>
        <thead>
          <th>Name</th>
          <th>Email</th>
          <th>Contact</th>
        </thead>
        <tbody>
          {data &&
            data.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
