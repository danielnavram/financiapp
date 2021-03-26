import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Formik, Form } from "formik";
import { LoginFormValidation } from "components/Form/login/LoginFormValidation";

import { Flex, FlexItem, Button, InputField } from "components/Common";
import { useToast, Link } from "@chakra-ui/react";
import { login } from "api/authfirebase";
import { useAuthentication } from "hooks/useAuthentication";

export const LoginForm = () => {
  const { setUser } = useAuthentication();
  const toast = useToast();

  return (
    <>
      <Formik
        initialValues={{
          email: "danielnavram@gmail.com",
          password: "1234567890",
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
              position: "bottom-left",
            });
          });
        }}
      >
        {(props) => {
          return (
            <Flex justifycontent="true">
              <FlexItem lg={"4"}>
                <Form>
                  <InputField name="email" label="Email" type="text" />
                  <InputField
                    name="password"
                    label="Password"
                    type="password"
                  />
                  <Button type="submit" variant="primary" name="Log in" />
                </Form>
              </FlexItem>
            </Flex>
          );
        }}
      </Formik>
      <Flex>
        <Link as={RouterLink} to="/reset-password">
          Do you forget your password?
        </Link>
      </Flex>
    </>
  );
};
