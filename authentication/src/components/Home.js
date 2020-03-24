import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <ul style={{display: 'flex', justifyContent: 'center', listStyleType: 'none',}}>
        <li>
          <Link to="/" style={{textDecoration: 'none'}}>Home</Link>
        </li>
        <li style={{marginLeft: '1rem'}}>
          <Link to="Login" style={{textDecoration: 'none'}}>Login</Link>
        </li>
        <li style={{marginLeft: '1rem'}}>
          <Link to="/Register" style={{textDecoration: 'none'}}>Register</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
