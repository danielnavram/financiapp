import React from "react";
import { Link } from "react-router-dom";

export function Logo({ name, center }) {
  return (
    <div className={center && "nav__logo-container"}>
      <Link className="nav__logo" to="/overview">
        <img
          className="nav__image"
          src="assets/images/financiapp.svg"
          alt="Financiapp Logo"
        />
      </Link>
    </div>
  );
}
