import React from "react";

import { Redirect, Route } from "react-router";
import { useAuthentication } from "hooks/useAuthentication";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { user: { status } } = useAuthentication();
  if (status === "loading") {
    return "Loading...";
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        status === "success" ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}
