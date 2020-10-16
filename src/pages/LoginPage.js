import React, { useContext } from "react";
import { useLocation, Link } from "wouter";

import { AUTH } from "../api/config";
import Card from "../components/Card/Card";
import NotificationContext from "../context/NotificationContext";

export default function LoginPage() {
  const [location, setLocation] = useLocation();
  const { setMessage, setActive, setType } = useContext(NotificationContext);
  const handleLoginForm = (e) => {
    e.preventDefault();
    const email = document.querySelector(".email").value;
    const pw = document.querySelector(".password").value;

    AUTH.signInWithEmailAndPassword(email, pw)
      .then((user) => {
        setActive(true);
        setType("alert--success");
        setMessage("Has iniciado sesión");
        setLocation("/dashboard");
      })
      .catch((error) => {
        setActive(true);
        setType("alert--danger");
        setMessage(error.message);
      });
  };

  return (
    <Card>
      <div className="card__form">
        <form className="form form_login" onSubmit={handleLoginForm}>
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
          <button className="button button__submit">Ingresar</button>
        </form>
      </div>
      <Link href="/signup">
        <p className="message">¿Aún no tienes un usuario?, registrate</p>
      </Link>
      <Link href="/resetpassword">
        <p className="message f-10 c--purple">
          ¿Has olvidado tu contraseña? Recuperala
        </p>
      </Link>
    </Card>
  );
}
