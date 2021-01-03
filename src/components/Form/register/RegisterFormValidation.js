import * as Yup from "yup";

const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png", "image/gif"];
const FILE_SIZE = 200 * 1024;

export const RegisterFormValidation = Yup.object().shape({
  name: Yup.string().required("This is a required field"),
  // photo: Yup.mixed()
  //   .test(
  //     "fileSize",
  //     "File too large",
  //     (value) => value === "undefined" || (value && value.size < FILE_SIZE)
  //   )
  //   .test(
  //     "fileFormat",
  //     "Unsopported Format",
  //     (value) => value && SUPPORTED_FORMATS.includes(value.type)
  //   ),
  email: Yup.string()
    .required("This is a required field")
    .email("Have to be a valid email"),
  password: Yup.string()
    .required()
    .min(6, "Your password must be at least 6 charecters"),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});
