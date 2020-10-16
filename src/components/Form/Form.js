import React from "react";

export default function Form({ children, handleSubmit }) {
  return (
    <div className="card__form">
      <form className="form" onSubmit={handleSubmit}>
        {children}
      </form>
    </div>
  );
}
