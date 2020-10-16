import React from "react";

import { useRemoveData } from "../../hooks/useRemoveData";

export default function RemoveEntry({ docId }) {
  const remove = useRemoveData();

  return (
    <span className="label label--danger">
      <i
        className="fas fa-trash-alt"
        onClick={() => remove.removeHandler("registros", docId)}
      ></i>
    </span>
  );
}
