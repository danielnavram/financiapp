import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Formik, Form } from "formik";
import { LoginFormValidation } from "components/Form/login/LoginFormValidation";
import { Button, InputField } from "components/Common";
import { useToast, Link } from "@chakra-ui/react";
import { login } from "api/authfirebase";
import { useAuthentication } from "hooks/useAuthentication";

export const LoginForm = () => {
  const { setUser } = useAuthentication();
  const toast = useToast();

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={LoginFormValidation}
      onSubmit={({ email, password }) => {
        login(email, password).then((res) => {
          if (res.status === "success")
            setUser({ status: "success", error: null, user: res.user });

          toast({
            title: res.code || res.title,
            description: res.message,
            status: res.status,
            duration: 9000,
            isClosable: true,
            position: "top",
          });
        });
      }}
    >
      {(props) => {
        return (
          <>
            <Form className="form">
              <InputField name="email" label="Email" type="text" />
              <InputField name="password" label="Password" type="password" />
              <Button
                type="submit"
                variant="primary"
                name="Log in"
                minW="200px"
                mb="20px"
              />
            </Form>
            <p className="main__footer">
              <Link as={RouterLink} to="/register">
                Don't have an account?
              </Link>
              <Link as={RouterLink} to="/reset-password">
                Did you forgot your password?
              </Link>
            </p>
          </>
        );
      }}
    </Formik>
  );
};
