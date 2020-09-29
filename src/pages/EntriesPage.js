import React from "react";

import Card from "../components/Card/Card";
import { useCategoriesList } from "../hooks/useCategoriesList";

export default function EntriesPage() {
  const categories = useCategoriesList();

  return (
    <Card title="Registro de movimientos financieros">
      <div className="card__form">
        <form className="form">
          <div className="form__group radio">
            <input
              type="radio"
              name="type"
              id="inc"
              value="inc"
              className="form__radio"
            />
            <label htmlFor="inc" className="form__label">
              Ingreso
            </label>
            <input
              type="radio"
              name="type"
              id="exp"
              value="exp"
              className="form__radio"
            />
            <label htmlFor="exp" className="form__label">
              Gasto
            </label>
          </div>
          <div className="form__group">
            <select className="form__input" name="category" required>
              <option disabled>Categoria</option>
              {categories.map((el) => {
                return <option key={el.id}>{el.name}</option>;
              })}
            </select>
          </div>
          <div className="form__group input">
            <input
              type="number"
              name="value"
              className="form__input"
              required
            />
            <label htmlFor="value" className="form__label">
              Valor
            </label>
          </div>
          <div className="form__group date">
            <input type="date" name="date" className="form__input" required />
            <label htmlFor="date" className="form__label">
              Fecha Registro
            </label>
          </div>
          <div className="form__group input">
            <input type="text" name="title" className="form__input" required />
            <label htmlFor="title" className="form__label">
              Titulo
            </label>
          </div>
          <div className="form__group input">
            <textarea
              className="form__input"
              name="description"
              required
            ></textarea>
            <label htmlFor="description" className="form__label">
              Descripción
            </label>
          </div>
          <button className="button button__submit">
            <i className="fas fa-save"></i> Registrar
          </button>
        </form>
      </div>
    </Card>
  );
}
