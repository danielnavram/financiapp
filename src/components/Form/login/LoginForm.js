import React from "react";
import { Formik, Form } from "formik";
import { LoginFormValidation } from "components/Form/login/LoginFormValidation";

import { InputField } from "components/Form/InputField";
import { Box, Button } from "@chakra-ui/react";
import { login } from "api/authfirebase";
import { useAuthentication } from "hooks/useAuthentication";

export const LoginForm = () => {
  const { setUser } = useAuthentication();

  return (
    <Formik
      initialValues={{ email: "danielnavram@gmail.com", password: "1234567890" }}
      validationSchema={LoginFormValidation}
      onSubmit={({ email, password }) => {
        setUser({ status: "success", error: null, user: login(email, password)});
      }}
    >
      {(props) => {
        return (
          <Box m="0 auto" w={["100%", "100%", "50%"]}>
            <Form>
              <InputField name="email" label="Email" type="text" />
              <InputField name="password" label="Password" type="password" />
              <Button type="submit" mt="30px">
                Log In
              </Button>
            </Form>
          </Box>
        );
      }}
    </Formik>
  );
};
