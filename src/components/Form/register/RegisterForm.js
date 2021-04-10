import React from "react";
import { Formik, Form } from "formik";
import { Button, InputField } from "components/Common";
import { Link, useToast } from "@chakra-ui/react";
import { RegisterFormValidation } from "components/Form/register/RegisterFormValidation";
import { register } from "api/authfirebase";
import { Link as RouterLink } from "react-router-dom";

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
            duration: 3000,
            isClosable: true,
            position: "top-left",
          });
        });
      }}
    >
      {(props) => {
        return (
          <>
          <Form className="form">
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
            <Button
              type="submit"
              name="Sign Up"
              variant="primary"
              minW="200px"
              mb="20px"
            />
          </Form>
          <Link as={RouterLink} to="/login">
            Already have an account ?
          </Link>
        </>
        );
      }}
    </Formik>
  );
};
