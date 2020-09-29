import React, { useContext } from "react";
import { Link } from "wouter";
import "./LinkItem.css";

import NavbarContext from "../../context/NavbarContext";

export default function LinkItem({ children, icon, ruta }) {
  const { setActiveNavbar } = useContext(NavbarContext);
  const iconCss = icon ? ["fas", `fa-${icon}`] : ["fas", "fa-tachometer-alt"];

  const handleNavbar = () => {
    setActiveNavbar(false);
  };

  return (
    <li className="menu__item" onClick={handleNavbar}>
      <i className={iconCss.join(" ")}></i>
      <Link href={ruta}>
        <a className="menu__link home">{children}</a>
      </Link>
    </li>
  );
}
