import { DB } from "./config";

export const createCategory = async (data) => {
  return await DB.collection("categorias").add(data);
};

export const getCategories = async (userId) => {
  return await DB.collection("categorias").where("userId", "==", userId).onSnapshot(doc => doc);
}
