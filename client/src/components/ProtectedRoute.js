import React from "react";
import { Route, Redirect } from "react-router-dom";
import { PropTypes } from "prop-types";

// Auth function is still missing

export default function ProtectedRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => {
        if (sessionStorage.getItem("token:")) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/"
              }}
            />
          );
        }
      }}
    />
  );
}

ProtectedRoute.propTypes = {
  component: PropTypes.func
};
