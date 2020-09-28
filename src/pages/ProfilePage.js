import React, { useState, useContext } from "react";
import { AUTH } from "../api/config";

import Card from "../components/Card/Card";
import NotificationContext from "../context/NotificationContext";

export default function ProfilePage() {
  const [displayName, setDisplayName] = useState();
  const [photoURL, setPhotoURL] = useState();
  const { setActive, setMessage, setType } = useContext(NotificationContext);

  const handleChange = (e) => {
    if (e.target.name === "displayName") setDisplayName(e.target.value);
    setPhotoURL(e.target.value);
  };

  const handleProfileForm = (e) => {
    e.preventDefault();
    AUTH.currentUser
      .updateProfile({
        displayName,
        photoURL,
      })
      .then(() => {
        setActive(true);
        setType("alert--success");
        setMessage("Su perfil se ha actualizado correctamente.");
      })
      .catch((error) => {
        setActive(true);
        setType("alert--danger");
        setMessage(error.message);
      });
  };

  return (
    <Card title="Actualiza tu perfil">
      <div className="card__form">
        <form className="form" onSubmit={handleProfileForm}>
          <div className="form__group input">
            <input
              type="text"
              name="displayName"
              className="form__input"
              onChange={handleChange}
              required
            />
            <label htmlFor="email" className="form__label">
              Nombre
            </label>
          </div>
          <div className="form__group input">
            <input
              type="text"
              name="photoURL"
              className="form__input"
              onChange={handleChange}
              required
            />
            <label htmlFor="password" className="form__label">
              Foto de Perfil
            </label>
          </div>
          <button className="button button__submit">Ingresar</button>
        </form>
      </div>
    </Card>
  );
}
