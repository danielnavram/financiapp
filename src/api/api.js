import { DB } from "./config";

export const createCategory = async (data) => {
  return await DB.collection("categorias").add(data);
};
