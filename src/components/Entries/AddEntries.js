import React, { useState, useContext } from "react";

import { useCategoriesList } from "../../hooks/useCategoriesList";
import NotificationContext from "../../context/NotificationContext";
import AuthContext from "../../context/AuthContext";
import Card from "../Card/Card";
import Form from "../Form/Form";
import Input from "../Form/Input";
import { DB } from "../../api/config";

export default function AddEntries() {
  const initialState = {
    type: "exp",
    category: "Categoria",
    value: "",
    createdAt: "",
    date: "",
    title: "",
    description: "",
  };

  const categories = useCategoriesList();
  const [data, setData] = useState(initialState);
  const user = useContext(AuthContext);
  const { setType, setMessage, setActive } = useContext(NotificationContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.category === "Categoria") {
      setActive(true);
      setType("alert--danger");
      setMessage("Por favor seleccionar una categoria valida");
    } else {
      const entry = {
        userId: data.userId,
        createdAt: data.createdAt,
        category: DB.doc(`categorias/${data.category}`),
        categoryId: data.category,
        title: data.title,
        date: data.date,
        description: data.description,
        value: data.value,
        type: data.type,
      };
      DB.collection("registros").add(entry);
      setData(initialState);
      setActive(true);
      setType("alert--success");
      setMessage("Su registro se ha guardado correctamente");
    }
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
      createdAt: new Date(),
      userId: user.uid,
    });
  };

  return (
    <Card title="Registro de movimientos financieros">
      <Form handleSubmit={handleSubmit}>
        <div className="form__group radio">
          <input
            type="radio"
            name="type"
            id="inc"
            defaultValue="inc"
            checked={data.type === "inc" ? true : false}
            onChange={handleChange}
            className="form__radio"
          />
          <label htmlFor="inc" className="form__label">
            Ingreso
          </label>
          <input
            type="radio"
            name="type"
            id="exp"
            defaultValue="exp"
            checked={initialState.type === "inc" ? true : false}
            onChange={handleChange}
            className="form__radio"
          />
          <label htmlFor="exp" className="form__label">
            Gasto
          </label>
        </div>
        <div className="form__group">
          <select
            className="form__input"
            name="category"
            defaultValue={data.category}
            onChange={handleChange}
            required
          >
            <option disabled>Categoria</option>
            {categories.map((el) => {
              return (
                <option key={el.id} value={el.id}>
                  {el.name}
                </option>
              );
            })}
          </select>
          <label htmlFor="category" className="form__label">
            Categoria
          </label>
        </div>
        <Input
          name="value"
          label="Valor"
          htmlFor="value"
          required={true}
          handlechange={handleChange}
          type="number"
          value={data.value}
        />
        <Input
          name="date"
          group="date"
          label="Fecha Registro"
          htmlFor="date"
          required={true}
          handlechange={handleChange}
          type="date"
          value={data.date}
        />
        <Input
          name="title"
          group="title"
          label="Titulo"
          htmlFor="title"
          required={true}
          handlechange={handleChange}
          type="text"
          value={data.title}
        />
        <div className="form__group input">
          <textarea
            className="form__input"
            name="description"
            onChange={handleChange}
            value={data.description}
            required
          ></textarea>
          <label htmlFor="description" className="form__label">
            Descripción
          </label>
        </div>
        <button className="button button__submit">
          <i className="fas fa-save"></i> Registrar
        </button>
      </Form>
    </Card>
  );
}
