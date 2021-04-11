import React from "react";
import { Flex, NavLink, Icon, Avatar } from "components/Common";
import { Logo } from "components/Header/Logo";

export const Header = ({ user }) => {
  return (
    <div className="nav">
      <Flex spacebetween="true" fullWidth="true" aligncenter="true">
        <Logo />
        <nav className="nav__menu">
          <ul>
            <li className="nav__item">
              <NavLink className="nav__link" to="/overview">
                Overview
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to="/transactions">
                Transactions
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
        <div className="user">
          <Icon className="user__icon" name="notification" size={"24px"} />
          <Icon className="user__icon" name="chat" size={"24px"} />
          <Avatar
            url={user.photoURL || "assets/images/user.png"}
            alt={user.displayName}
          />
        </div>
      </Flex>
    </div>
  );
};
