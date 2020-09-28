import React, { useContext } from "react";
import { Link, useLocation } from "wouter";

import { AUTH } from "../api/config";
import NotificationContext from "../context/NotificationContext";

export default function ResetPasswordPage() {
  const [location, setLocation] = useLocation();
  const { setMessage, setActive, setType } = useContext(NotificationContext);
  const handleResetForm = (e) => {
    e.preventDefault();
    const email = document.querySelector(".email").value;

    AUTH.sendPasswordResetEmail(email)
      .then(() => {
        setActive(true);
        setType("alert--success");
        setMessage(
          "Se ha enviado un correo de recuperación. Por favor seguir los pasos"
        );
        setLocation("/login");
      })
      .catch((error) => {
        setActive(true);
        setType("alert--danger");
        setMessage(error.message);
      });
  };

  return (
    <div className="card">
      <div className="card__form">
        <form className="form form_reset" onSubmit={handleResetForm}>
          <div className="form__group input">
            <input
              type="text"
              name="email"
              className="form__input email"
              required
            />
            <label htmlFor="email" className="form__label">
              Email
            </label>
          </div>
          <button className="button button__submit">
            Recuperar Contraseña
          </button>
        </form>
      </div>
    </div>
  );
}
