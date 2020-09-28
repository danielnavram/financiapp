import React from "react";
import { Link } from "wouter";
import "./LinkItem.css";

export default function LinkItem({ children, icon, ruta }) {
  const iconCss = icon ? ["fas", `fa-${icon}`] : ["fas", "fa-tachometer-alt"];
  return (
    <li className="menu__item">
      <i className={iconCss.join(" ")}></i>
      <Link href={ruta}>
        <a className="menu__link home">{children}</a>
      </Link>
    </li>
  );
}
