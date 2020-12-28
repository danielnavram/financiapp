import React, { useState, useEffect, useContext } from "react";
import { DB } from "../api/config";
import AuthContext from "../context/AuthContext";

export function useEntriesList() {
  const [entries, setEntries] = useState([]);
  const user = useContext(AuthContext);

  useEffect(() => {
    DB.collection("registros")
      .where("userId", "==", user.uid)
      .onSnapshot((query) => {
        const docs = [];
        query.forEach((doc) => {
          let item = doc.data();
          item.id = doc.id;
          const promise = item.category
            .get()
            .then((doc) => ({ ...item, categoryName: doc.data().name }))
            .catch((err) => console.error(err));
          docs.push(promise);
        });
        Promise.all(docs).then((doc) => setEntries(doc));
      });
  }, []);

  return entries;
}
