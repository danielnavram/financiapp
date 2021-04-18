import { useEffect } from "react";

export const useClick = (ref, callback) => {
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  });
};

export const getTypeRecord = (type, data) => {
  return data?.filter((item) => item.type === type);
};

export const sumRecords = (data) => {
  return data?.map((data) => data.value).reduce((acc, cur) => acc + cur, 0);
};

export const sumCategoriesTypes = (dataArr) => {
  if (!dataArr?.length) {
    return {};
  }
  let categories = [...new Set(dataArr.map((data) => data.category.name))].map(
    (category) => {
      return {
        category,
        dataArr: dataArr.filter((data) => data.category.name === category),
      };
    }
  );
  return categories.map((category) => ({
    ...category,
    incomes: sumRecords(getTypeRecord("income", category.dataArr)),
    expenses: sumRecords(getTypeRecord("expense", category.dataArr)),
  }));
};

export const currencyFormatting = (value) =>
  (new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP",  }).format(
    value || 0
  )).replace(/,.+/, '');
