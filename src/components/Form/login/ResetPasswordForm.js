import React from "react";
import { Formik, Form } from "formik";
import { ResetPasswordValidation } from "components/Form/login/ResetPasswordValidation";
import { Button, InputField } from "components/Common";
import { useToast } from "@chakra-ui/react";
import { resetPassword } from "api/authfirebase";

export const ResetPasswordForm = () => {
  const toast = useToast();

  return (
    <Formik
      initialValues={{ email: "" }}
      validationSchema={ResetPasswordValidation}
      onSubmit={({ email }) => {
        resetPassword(email).then(({ status, title, message }) => {
          toast({
            title,
            description: message,
            status,
            duration: 5000,
            isClosable: true,
            position: "top",
          });
        });
      }}
    >
      {(props) => {
        return (
          <Form className="form">
            <InputField name="email" label="Email" type="text" />
            <Button
              type="submit"
              name="Send Email"
              variant="primary"
              minW="200px"
            />
          </Form>
        );
      }}
    </Formik>
  );
};
