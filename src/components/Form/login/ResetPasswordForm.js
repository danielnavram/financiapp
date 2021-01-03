import React from "react";
import { Formik, Form } from "formik";
import { ResetPasswordValidation } from "components/Form/login/ResetPasswordValidation";

import { InputField } from "components/Form/InputField";
import { Box, Button, useToast } from "@chakra-ui/react";
import { resetPassword } from "api/authfirebase";

export const ResetPasswordForm = () => {
  const toast = useToast();

  return (
    <Formik
      initialValues={{ email: "danielnavram@gmail.com" }}
      validationSchema={ResetPasswordValidation}
      onSubmit={({ email }) => {
        resetPassword(email).then(({status, title, message}) => {
            toast({
              title,
              description: message,
              status,
              duration: 5000,
              isClosable: true,
              position: "bottom-left"
            });
        })
      }}
    >
      {(props) => {
        return (
          <Box m="0 auto" w={["100%", "100%", "50%"]}>
            <Form>
              <InputField name="email" label="Email" type="text" />
              <Button type="submit" mt="30px">
                Send Email
              </Button>
            </Form>
          </Box>
        );
      }}
    </Formik>

  );
};
