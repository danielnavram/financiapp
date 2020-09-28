import React from "react";
import "./Card.css";

export default function Card({ title, children }) {
  return (
    <div className="card">
      <div className="card__content">
        {title ? <h3 className="card__title">{title}</h3> : ""}
        {children}
      </div>
    </div>
  );
}
