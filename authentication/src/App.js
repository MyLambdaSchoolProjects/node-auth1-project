import React from 'react';
import {Route, Switch } from "react-router-dom";
import './App.css';

import Login from './components/login';
import Home from './components/Home';
import Register from './components/register';
import GetUsers from './components/user-list';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <div className="App">
      
      {/* //<Register/> */}
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/Login' component={Login}/>
        <Route path='/Register' component={Register}/>

        <PrivateRoute path='/GetUsers'>
          <GetUsers/>
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
