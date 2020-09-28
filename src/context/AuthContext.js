import React, { useContext, useEffect, useState } from "react";
import { AUTH } from "../api/config";

const AuthContext = React.createContext({});

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    AUTH.onAuthStateChanged((userAuth) => {
      setUser(userAuth);
    });
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

export default AuthContext;
