import React from "react";

export default function User({ name, image }) {
  return (
    <>
      <span className="header__username">{name}</span>
      <div className="header__profile">
        <img src={image} alt={name} className="header__image" />
      </div>
    </>
  );
}
