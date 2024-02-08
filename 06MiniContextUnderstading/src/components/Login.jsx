import React, { useState, useContext } from "react";
import UserContext from "../context/userContext/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //data sent to user varible of userContext
  const { setUser } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div>
      <h2>Login Here</h2>
      <input
        type="text"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />
      <input
        type="text"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
