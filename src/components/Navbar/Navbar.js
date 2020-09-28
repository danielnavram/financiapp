import React, { useContext, useEffect } from "react";

import NavbarContext from "../../context/NavbarContext";
import AuthContext from "../../context/AuthContext";
import LinkItem from "./LinkItem";
import LogoutButton from "../Auth/LogoutButton";

import "./Navbar.css";

export default function Navbar() {
  const { activeNavbar, setActiveNavbar } = useContext(NavbarContext);
  const user = useContext(AuthContext);

  const handleNavbar = () => {
    if (activeNavbar) setActiveNavbar(false);
  };

  return (
    <nav className={!activeNavbar ? "nav" : ["nav", "active"].join(" ")}>
      <span className="nav__close" id="nav__close" onClick={handleNavbar}>
        <i className="fas fa-times"></i>
      </span>
      <div className="nav__content">
        <h2>FinanciApp</h2>
        <ul className="menu">
          {user ? (
            <>
              <LinkItem ruta="/dashboard">Escritorio</LinkItem>
              <LinkItem icon="user" ruta="/profile">
                Perfil
              </LinkItem>
              <LinkItem icon="cash-register" ruta="/entries">
                Registros
              </LinkItem>
              <LinkItem icon="sitemap" ruta="/categories">
                Categorias
              </LinkItem>
              <LogoutButton>Salir</LogoutButton>
            </>
          ) : (
            <>
              <LinkItem ruta="/login" icon="sign-in-alt">
                Ingresar
              </LinkItem>
              <LinkItem ruta="/signup" icon="user-plus">
                Registrarse
              </LinkItem>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
