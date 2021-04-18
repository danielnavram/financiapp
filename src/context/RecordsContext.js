import React, { useEffect, useState } from "react";
import { DB } from "../api/config";
import { useAuthentication } from "hooks/useAuthentication";
import { getTypeRecord, sumCategoriesTypes } from "components/Common";

const RecordsContext = React.createContext({});

export function RecordsContextProvider({ children }) {
  const [records, setRecords] = useState();
  const [types, setTypes] = useState({});
  const [categories, setCategories] = useState({});
  const {
    user: { user },
  } = useAuthentication();

  useEffect(() => {
    if (user.uid) {
      const unsubscribe = DB.collection("records")
        .where("userId", "==", user.uid)
        .onSnapshot((snap) => {
          const data = snap.docs.map((doc) => ({
            ...doc.data(),
            date: doc.data().date.toDate(),
          }));
          setRecords(data);
          setCategories(sumCategoriesTypes(data));
          setTypes({
            incomes: getTypeRecord("income", data),
            expenses: getTypeRecord("expense", data),
          });
        });

      return unsubscribe;
    }
  }, [user]);

  return (
    <RecordsContext.Provider value={{ records, types, categories, setRecords }}>
      {children}
    </RecordsContext.Provider>
  );
}

export default RecordsContext;
