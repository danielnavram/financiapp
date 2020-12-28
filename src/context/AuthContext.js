import React, { useEffect, useState } from "react";
import { AUTH } from "../api/config";

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
      } else {
        setUser({
          status: "success",
          error: null,
          user: { ...userAuth },
        });
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
