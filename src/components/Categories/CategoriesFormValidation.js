import * as Yup from "yup";

export const CategoriesFormValidation = Yup.object().shape({
  name: Yup.string().required("This is a required field"),
});