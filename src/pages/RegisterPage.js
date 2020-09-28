import React, { useContext } from "react";
import { Link, useLocation } from "wouter";

import { AUTH } from "../api/config";
import NotificationContext from "../context/NotificationContext";

export default function RegisterPage() {
  const [location, setLocation] = useLocation();
  const { setMessage, setActive, setType } = useContext(NotificationContext);
  const handleRegisterForm = (e) => {
    e.preventDefault();
    const email = document.querySelector(".email").value;
    const pw = document.querySelector(".password").value;

    AUTH.createUserWithEmailAndPassword(email, pw)
      .then((user) => {
        setActive(true);
        setType("alert--success");
        setMessage(
          "Se ha registrado correctamente. Por favor recuerde validar su correo electrónico y actualizar sus datos en la ruta /Perfil/Actualizar Datos"
        );
        setLocation("/signup");
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
        <form className="form form_register" onSubmit={handleRegisterForm}>
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
          <div className="form__group input">
            <input
              type="password"
              name="password"
              className="form__input password"
              required
            />
            <label htmlFor="password" className="form__label">
              Contraseña
            </label>
          </div>
          <button className="button button__submit">Registrarse</button>
        </form>
      </div>
      <Link href="/login">
        <p className="message">¿Ya tienes un usuario?, inicia sesión</p>
      </Link>
    </div>
  );
}
