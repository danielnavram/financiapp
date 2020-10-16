import React, { useContext, useState } from "react";

import Card from "../Card/Card";
import { DB } from "../../api/config";
import NotificationContext from "../../context/NotificationContext";
import AuthContext from "../../context/AuthContext";

export default function CategoryPage() {
  const initialState = {
    name: "",
    createdAt: "",
    updatedAt: "",
    userId: "",
  };
  const [data, setData] = useState(initialState);
  const { setActive, setType, setMessage } = useContext(NotificationContext);
  const user = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    DB.collection("categorias")
      .add(data)
      .then((docRef) => {
        setActive(true);
        setType("alert--success");
        setMessage(
          "Su categoria ha sido guardada. Ya puede dirigirse a la ruta de entradas para registrar sus movimientos de flujo de caja"
        );
        setData(initialState);
      })
      .catch((error) => {
        setActive(true);
        setType("alert--danger");
        setMessage(error.message);
      });
  };

  const handleChange = (e) => {
    setData({
      [e.target.name]: e.target.value,
      createdAt: new Date(),
      userId: user.uid,
    });
  };

  return (
    <Card title="Crear Categoria">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__group">
          <input
            type="text"
            name="name"
            className="form__input"
            value={data.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="name" className="form__label">
            Nombre de la categoria
          </label>
        </div>
        <button className="button button__submit">
          <i className="fas fa-save"></i> Guardar
        </button>
      </form>
    </Card>
  );
}
