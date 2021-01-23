import { DB } from "./config";

export const createCategory = async (data) => {
  return await DB.collection("categorias").add(data);
};

export const getCategories = async (userId) => {
  return await DB.collection("categorias")
    .where("userId", "==", userId)
    .onSnapshot((doc) => {
      return doc.forEach((cat) => {
        return cat.data();
      });
    });
};

export const validateDuplicates = async ({
  collection,
  key,
  value,
  userId,
}) => {
  return await DB.collection(collection)
    .where(key, "==", value)
    .where("userId", "==", userId)
    .onSnapshot((doc) => {
      return doc.forEach((item) => {
        return item.data();
      });
    });
};
