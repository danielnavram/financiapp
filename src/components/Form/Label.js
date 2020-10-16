import React from "react";

export default function Label({ children, htmlFor }) {
  return (
    <label className="form__label" htmlFor={htmlFor}>
      {children}
    </label>
  );
}
