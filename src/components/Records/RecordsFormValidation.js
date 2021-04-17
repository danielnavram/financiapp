import * as Yup from "yup";

export const RecordsFormValidation = Yup.object().shape({
  title: Yup.string().required("This is a required field"),
  date: Yup.string().required("This is a required field"),
  category: Yup.string().required("This is a required field"),
  value: Yup.string().required("This is a required field"),
  description: Yup.string().required("This is a required field"),
  type: Yup.string().required("This is a required field"),
});
