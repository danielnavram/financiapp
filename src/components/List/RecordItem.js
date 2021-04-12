import React from "react";
import { Icon } from "components/Common";

export const RecordItem = ({
  title,
  category,
  date,
  description,
  value,
  id,
}) => {
  return (
    <li className="list__item" key={id}>
      <div className="list__section">icono</div>
      <div className="list__section">
        <h4 className="list__title">{title}</h4>
        <span className="list__text">{category.name}</span>
        <p className="list__detail">{description}</p>
      </div>
      <div className="list__section">
        <h4 className="list__value">{value}</h4>
        <span className="list__text">{date}</span>
      </div>
      <div className="list__section">
        <div className="list__remove">
          <Icon name="trash" />
        </div>
      </div>
    </li>
  );
};
