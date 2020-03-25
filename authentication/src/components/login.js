import React, { useState } from "react";
import axiosWithAuth from './Auth';
import { Link } from "react-router-dom";

import "./styles.css";

const Login = props => {
  const [login, SetLogin] = useState({
    username: "",
    password: ""
  }
  );

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/auth/login", login)
      .then(res => {
        console.log("response", res);
        const { data } = res;

        // localStorage.setItem("token", data.token);
        // localStorage.setItem("loggedInUser_id", data.loggedInUser_id);
        props.history.push("/GetUsers");
        //window.location.reload(true);
        //console.log("response", localStorage);
      })
      .catch(err => console.log(err));
  };

  const handleChange = e => {
    SetLogin({
      ...login,
      [e.target.name]: e.target.value
    });
    
  };

  return (
    <div>
      <>
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            listStyleType: "none"
          }}
        >
          <li>
            <Link to="/" style={{ textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li style={{ marginLeft: "1rem" }}>
            <Link to="Login" style={{ textDecoration: "none" }}>
              Login
            </Link>
          </li>
          <li style={{ marginLeft: "1rem" }}>
            <Link to="/Register" style={{ textDecoration: "none" }}>
              Register
            </Link>
          </li>
        </ul>
      </>
      <form className="login" onSubmit={handleSubmit}>
        <p id="form">Login Form</p>
        <input
          className="inputs"
          type="text"
          name="username"
          value={login.username}
          onChange={handleChange}
          placeholder="Username"
        />
        <input
          className="inputs"
          type="password"
          name="password"
          value={login.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button className="inputs" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
