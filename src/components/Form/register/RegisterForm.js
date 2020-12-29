import React from "react";
import { Formik, Form } from "formik";

import { InputField } from "components/Form/InputField";
import { Box, Button } from "@chakra-ui/react";
import { RegisterFormValidation } from "components/Form/register/RegisterFormValidation";
import { register } from "api/authfirebase";

export const RegisterForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        checkpassword: "",
        photo: "",
      }}
      validationSchema={RegisterFormValidation}
      onSubmit={(data) => {
        console.log(data);
      }}
    >
      {(props) => {
        return (
          <Box m="0 auto" w={["100%", "100%", "50%"]}>
            <Form>
              <InputField name="name" label="Name" type="text" />
              <InputField name="email" label="Email" type="email" />
              <InputField name="photo" label="Photo Profile" type="file" />
              <InputField name="password" label="Password" type="password" />
              <InputField
                name="checkpassword"
                label="Check Password"
                type="password"
              />
              <Button type="submit" mt="30px">
                Sign Up
              </Button>
            </Form>
          </Box>
        );
      }}
    </Formik>
  );
};
