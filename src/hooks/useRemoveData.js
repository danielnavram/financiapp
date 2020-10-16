import { useEffect, useState, useContext } from "react";

import { DB } from "../api/config";
import NotificationContext from "../context/NotificationContext";

export const useRemoveData = () => {
  const { setActive, setType, setMessage } = useContext(NotificationContext);

  const removeHandler = (collection, docId) => {
    DB.collection(collection)
      .doc(docId)
      .delete()
      .then(() => {
        setActive(true);
        setType("alert--success");
        setMessage("El item ha sido eliminado correctamente");
      })
      .catch((err) => {
        setActive(true);
        setType("alert--danger");
        setMessage(err.message);
      });
  };

  return { removeHandler };
};
