import { useState } from "react";

const RegistrationWithoutHooks = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [age, setAge] = useState("");
  let [password, setPassword] = useState("");
  let [clgName, setClgName] = useState("");


  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log({name, age, email, password, clgName});
    setName("");
    setAge("");
    setEmail("");
    setPassword("");
    setClgName("");
  }

  return (
    <div>
      <h1>Registration without using Hooks</h1>
      <form onSubmit={handleSubmit}>

        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input><br/>

        <label>Age: </label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        ></input><br/>

        <label>Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input><br/>

        <label>Password: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input><br/>

        <label>College Name: </label>
        <input
          type="text"
          value={clgName}
          onChange={(e) => setClgName(e.target.value)}
        ></input><br/>

        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};
export default RegistrationWithoutHooks;
