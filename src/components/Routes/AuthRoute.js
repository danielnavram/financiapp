import React from "react";

import { Redirect, Route } from "react-router";
import { useAuthentication } from "hooks/useAuthentication";

export default function AuthRoute({ component: Component, ...rest }) {
  const { user: { status } } = useAuthentication();
  return (
    <Route
      {...rest}
      render={(props) =>
        (status === "logout" || status === "non-verified") ? <Component {...props} /> : <Redirect to="/dashboard" />
      }
    />
  );
}
