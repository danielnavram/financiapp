import * as Yup from "yup";

export const ResetPasswordValidation = Yup.object().shape({
  email: Yup.string().required("This is a required field").email("Have to be a valid email")
});