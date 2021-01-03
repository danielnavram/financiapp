import React, { useEffect, useState } from "react";
import { AUTH } from "../api/config";
import { EmailVerify } from "components/Status/EmailVerify";
import { Loading } from "components/Status/Loading";

const AuthContext = React.createContext({});

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({
    status: "loading",
    error: null,
    user: null,
  });

  useEffect(() => {
    AUTH.onAuthStateChanged((userAuth) => {
      if (userAuth === null) {
        setUser({ status: "logout", error: null, user: null });
      } else if (userAuth && userAuth.emailVerified) {
        setUser({
          status: "success",
          error: null,
          user: { ...userAuth },
        });
      } else {
        setUser({
          status: "non-verified",
          error: null,
          user: null
        })
      }
    });
  }, []);

  if (user.status === "loading") {
    return <Loading />
  }

  if (user.status === "non-verified") {
    return <EmailVerify />
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
