import React from "react";
import { Formik, Form } from "formik";

import { InputField } from "components/Common";
// import { InputFile } from "components/Form/InputFile";
import { Box, Button, useToast } from "@chakra-ui/react";
import { RegisterFormValidation } from "components/Form/register/RegisterFormValidation";
import { register } from "api/authfirebase";
// import { uploadProfileImage } from "api/storage";

export const RegisterForm = () => {
  const toast = useToast();
  return (
    <Formik
      initialValues={{
        name: "Daniel Navarro",
        email: "danielnavram@gmail.com",
        password: "123456",
        passwordConfirmation: "123456",
      }}
      validationSchema={RegisterFormValidation}
      onSubmit={(data) => {
        register(data).then(({ status, title, message }) => {
          toast({
            status,
            title,
            description: message,
            duration: 9000,
            isClosable: true,
            position: "bottom-left",
          });
        });
      }}
    >
      {(props) => {
        return (
          <Box m="0 auto" w={["100%", "100%", "50%"]}>
            <Form>
              <InputField name="name" label="Name" type="text" />
              <InputField name="email" label="Email" type="email" />
              {/* <InputFile
                name="photo"
                label="Photo Profile"
                onChange={(event) =>
                  props.setFieldValue("photo", event.target.files[0])
                }
              /> */}
              <InputField name="password" label="Password" type="password" />
              <InputField
                name="passwordConfirmation"
                label="Confirm Password"
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
