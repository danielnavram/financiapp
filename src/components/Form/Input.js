import React from "react";

import Label from "./Label";

export default function Input(props) {
  return (
    <div
      className={
        props.group ? ["form__group", props.group].join(" ") : "form__group "
      }
    >
      <input
        className="form__input"
        name={props.name}
        type={props.type}
        onChange={props.handlechange}
        required={props.required}
        value={props.value}
      />
      <Label htmlFor={props.htmlFor}>{props.label}</Label>
    </div>
  );
}
