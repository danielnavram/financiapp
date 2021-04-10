import { useState, useEffect, useContext } from "react";
import { DB } from "api/config";
import AuthContext from "context/AuthContext";

export function useCategoriesList() {
  const {
    user: { user },
  } = useContext(AuthContext);
  const [data, setData] = useState({ categories: null, status: "loading" });
  
  useEffect(() => {
    if (user?.uid) {
      const unsubscribe = DB.collection("categorias")
        .where("userId", "==", user.uid)
        .onSnapshot((doc) => {
          const datos = [];
          doc.forEach((cat) => {
            datos.push({
              ...cat.data(),
              id: cat.id,
              label: cat.data().name,
              value: cat.data().name,
            });
          });
          setData({ categories: datos, status: "success" });
        });
      return unsubscribe;
    }
  }, [user]);

  return { ...data, setData };
}
