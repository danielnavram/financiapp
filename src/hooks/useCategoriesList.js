import { useState, useEffect, useContext } from "react";
import { DB } from "../api/config";
import AuthContext from "../context/AuthContext";

export function useCategoriesList() {
  const [categorias, setCategorias] = useState([]);
  const user = useContext(AuthContext);

  useEffect(() => {
    DB.collection("categorias")
      .where("userId", "==", user.uid)
      .onSnapshot((query) => {
        const docs = [];
        query.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setCategorias(docs);
      });
  }, []);

  return categorias;
}
