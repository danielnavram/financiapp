import React from "react";
import { Formik, Form } from "formik";
import { LoginFormValidation } from "components/Form/login/LoginFormValidation";

import { InputField } from "components/Form/InputField";
import { Box, Button, useToast } from "@chakra-ui/react";
import { login } from "api/authfirebase";
import { useAuthentication } from "hooks/useAuthentication";

export const LoginForm = () => {
  const { setUser } = useAuthentication();
  const toast = useToast()

  return (
    <Formik
      initialValues={{ email: "danielnavram@gmail.com", password: "1234567890" }}
      validationSchema={LoginFormValidation}
      onSubmit={({ email, password }) => {
        login(email, password).then(res => {
          if (res.status === "error") {
            toast({
              title: res.code,
              description: res.message,
              status: res.status,
              duration: 10000,
              isClosable: true,
              position: "bottom-left"
            })
          } else {
            toast({
              title: `Welcome ${res.user.displayName}`,
              description: "You have been logged in correctly.",
              status: res.status,
              duration: 5000,
              isClosable: true,
              position: "bottom-left"
            })
            setUser({ status: "success", error: null, user: res.user});
          }
        })
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
