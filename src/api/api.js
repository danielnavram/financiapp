import { DB } from "./config";

export const createCategory = async (data) => {
  return await DB.collection("categorias")
    .doc()
    .set(data)
    .then(() => ({
      status: "success",
      title: "Category created",
      message: `The category ${data.name} was created successfully`,
    }))
    .catch((err) => ({
      status: "error",
      title: err.code,
      message: err.message,
    }));
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

export const deleteCategory = async (id) => {
  return await DB.collection("categorias")
    .doc(id)
    .delete()
    .then(function () {
      return {
        status: "success",
        title: "Category deleted",
        message: "The category was delete successfully",
      };
    })
    .catch(function (err) {
      return {
        status: "error",
        title: err.code,
        message: err.message,
      };
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

export const createRecord = async (data) => {
  return await DB.collection("records")
    .add({ ...data })
    .then(() => ({
      status: "success",
      title: "Record was created",
      message: `The record ${data.title} was created successfully`,
    }))
    .catch((err) => ({
      status: "error",
      title: err.code,
      message: err.message,
    }));
};

export const deleteRecord = async (id) => {
  return await DB.collection("records")
    .doc(id)
    .delete()
    .then(function () {
      return {
        status: "success",
        title: "Record deleted",
        message: "The records was delete successfully",
      };
    })
    .catch(function (err) {
      return {
        status: "error",
        title: err.code,
        message: err.message,
      };
    });
};
