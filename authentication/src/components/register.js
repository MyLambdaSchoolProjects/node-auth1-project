import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = props => {
  const [registration, setRegistration] = useState({
    username: "",
    password: ""
  });

  const signUp = e => {
    e.preventDefault();
    axios
      .post(`http://localhost:3300/api/auth/register`, {
        ...registration
      })
      .then(res => {
        console.log("register", res.data);

        props.history.push("/");
      })
      .catch(err => console.log(err));
  };

  const signUpChangedHandler = event => {
    setRegistration({
      ...registration,
      [event.target.name]: event.target.value
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
      <form className="register" onSubmit={signUp}>
        <p className="form">Register</p>
        <input
          className="inputs"
          type="text"
          placeholder="Username"
          name='username'
          value={registration.username}
          onChange={signUpChangedHandler}
        />
        <input
          className="inputs"
          type="password"
          placeholder="Password"
          name='password'
          value={registration.password}
          onChange={signUpChangedHandler}
        />
        <button className="inputs" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
