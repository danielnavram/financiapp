import React, { useContext } from "react";

import { DB } from "../../api/config";
import NotificationContext from "../../context/NotificationContext";

export default function RemoveCategorie({ catId }) {
  const { setActive, setType, setMessage } = useContext(NotificationContext);

  const handleRemoveCategorie = async (catId) => {
    await DB.collection("categorias")
      .doc(catId)
      .delete()
      .then(() => {
        setActive(true);
        setType("alert--success");
        setMessage("Se ha eliminado correctamente");
      })
      .catch((error) => {
        setActive(true);
        setType("alert--danger");
        setMessage(error.message);
      });
  };

  return (
    <span className="label label--danger">
      <i
        className="fas fa-trash-alt"
        onClick={() => handleRemoveCategorie(catId)}
      ></i>
    </span>
  );
}
