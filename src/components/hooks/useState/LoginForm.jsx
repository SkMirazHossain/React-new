import "./index.css";
import { useState } from "react";


// if there is only two to three field in form then we can use separate useState and call it like this https://prnt.sc/z-lVyFz4QlFB

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


// here we get the value in console but if the value and key is same then no need to write it two times https://prnt.sc/tK6QuWtAxUS0 just write it one time like this https://prnt.sc/rQHF7JrluSTv

const handleFormSubmit = (e) => {
    e.preventDefault();
    const loginData = {
      username,
      password,
    };

    console.log(loginData);
  };

  return (
    <div className="wrapper">
    <div className="container">
      <div className="card">
        <h1>Login Form</h1>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            required
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            required
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
    </div>
  );
};