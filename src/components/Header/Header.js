import React, { useContext } from "react";
import NavbarContext from "../../context/NavbarContext";
import AuthContext from "../../context/AuthContext";

import "./Header.css";

import User from "../User/User";

export default function Header({ title }) {
  const { activeNavbar, setActiveNavbar } = useContext(NavbarContext);
  const user = useContext(AuthContext);
  const handleNavbar = () => {
    if (!activeNavbar) setActiveNavbar(true);
  };

  return (
    <header className="header">
      <div className="logo">
        <div className="hmb" onClick={handleNavbar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <h3 className="logo__title">
          <a href="#titlelogo" className="logo__link">
            {title}
          </a>
        </h3>
        {user ? (
          <User
            name={user.displayName ? user.displayName : user.email}
            image={
              user.photoURL
                ? user.photoURL
                : "https://randomuser.me/api/portraits/lego/3.jpg"
            }
          />
        ) : (
          ""
        )}
      </div>
    </header>
  );
}
