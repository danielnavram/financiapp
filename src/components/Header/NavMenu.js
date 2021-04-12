import React from "react";
import { NavLink } from "components/Common";

export const NavMenu = () => {
  return (
    <nav className="nav__menu">
      <ul>
        <li className="nav__item">
          <NavLink className="nav__link" to="/overview">
            Overview
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to="/records">
            Records
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to="/categories">
            Categories
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to="/budget">
            Budget
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
