
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Header } from '~components';
import { useAuth } from "./context/auth";

function PrivateRoute({ component: Component, ...rest }) {
  const authentication = useAuth();

  const isAuthenticated = () => {
    const storageContent = JSON.parse(localStorage.getItem('user'));
    return authentication.authTokens || storageContent ? true : false;
  }

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <>
            <Header/>
            <Component {...props} />
          </>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}

export default PrivateRoute;
