import * as Yup from "yup";

export const LoginFormValidation = Yup.object().shape({
  email: Yup.string().required("This is a required field").email("Have to be a valid email"),
  password: Yup.string().required().min(6, "Your password must be at least 6 charecters"),
});