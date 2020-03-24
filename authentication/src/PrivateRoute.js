import React from "react";
import { Route, Redirect } from "react-router-dom";
import Cookies from 'js-cookie'

const isAuthenticated = () => {
  console.log('auth',Cookies.get());
  return  Cookies.get("chocolatechip")  ? true : false;
};
export default function PrivateRoute({ children, ...rest }) {
  console.log("...rest", rest);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}