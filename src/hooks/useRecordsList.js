import { useState, useEffect, useContext } from "react";
import { DB } from "api/config";
import AuthContext from "context/AuthContext";

export function useRecordsList() {
  const {
    user: { user },
  } = useContext(AuthContext);
  const [data, setData] = useState({ records: null, status: "loading" });
  useEffect(() => {
    if (user?.uid) {
      const unsubscribe = DB.collection("records")
        .where("userId", "==", user.uid)
        .onSnapshot((doc) => { 
          const datos = [];
          doc.forEach((record) => {
            datos.push({ ...record.data(), id: record.id });
          });
          setData({ records: datos, status: "success" });
        });
      return unsubscribe;
    }
  }, [user]);

  return { ...data, setData };
}
