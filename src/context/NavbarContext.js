import React, { useState } from "react";

const NavbarContext = React.createContext({});

export function NavbarContextProvider({ children }) {
  const [activeNavbar, setActiveNavbar] = useState(false);
  return (
    <NavbarContext.Provider value={{ activeNavbar, setActiveNavbar }}>
      {children}
    </NavbarContext.Provider>
  );
}

export default NavbarContext;
