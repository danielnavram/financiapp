import React, { useState, useEffect } from "react";

import { Redirect, Route } from "react-router";
import { useAuthentication } from "hooks/useAuthentication";

export default function AuthRoute({
  component: Component,
  logged = false,
  redirectUrl = "/dashboard",
  ...rest
}) {
  const {
    user: { status },
  } = useAuthentication();
  const [canNavigate, setNavigate] = useState(false);

  useEffect(() => {
    if (logged) {
      setNavigate(status === "success");
    } else {
      setNavigate(status === "logout" || status === "non-verified");
    }
  }, [status, logged]);

  return (
    <Route
      {...rest}
      render={(props) =>
        canNavigate ? <Component {...props} /> : <Redirect to={redirectUrl} />
      }
    />
  );
}
