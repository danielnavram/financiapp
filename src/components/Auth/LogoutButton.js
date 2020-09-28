import React, { useContext } from "react";
import { Link, useLocation } from "wouter";

import { AUTH } from "../../api/config";
import NotificationContext from "../../context/NotificationContext";

export default function LogoutButton({ children }) {
  const [location, setLocation] = useLocation();
  const { setType, setActive, setMessage } = useContext(NotificationContext);
  const handleLogout = () => {
    AUTH.signOut();
    setType("alert--info");
    setMessage("Se ha cerrado sesión correctamente");
    setActive(true);
    setLocation("/login");
  };

  return (
    <li className="menu__item">
      <i className="fas fa-sign-out-alt"></i>
      <Link onClick={handleLogout}>
        <a className="menu__link ">{children}</a>
      </Link>
    </li>
  );
}
