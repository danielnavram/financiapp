import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuthentication } from "hooks/useAuthentication";

export default function AuthRoute({
  component: Component,
  logged = false,
  redirectUrl = "/login",
  ...rest
}) {
  const {
    user: { status },
  } = useAuthentication();
  let canNavigate = false;

  if (logged) {
    canNavigate = status === "success";
  } else {
    canNavigate = status === "logout" || status === "non-verified";
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        canNavigate ? <Component {...props} /> : <Redirect to={redirectUrl} />
      }
    />
  );
}