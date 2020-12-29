import React from "react";

import { Redirect, Route } from "react-router";
import { useAuthentication } from "hooks/useAuthentication";

export default function AuthRoute({ component: Component, ...rest }) {
  const { user: { status } } = useAuthentication();
  if (status === "loading") {
    return "Loading...";
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        status === "logout" ? <Component {...props} /> : <Redirect to="/dashboard" />
      }
    />
  );
}
