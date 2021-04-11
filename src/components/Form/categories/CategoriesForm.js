import React, { forwardRef } from "react";
import { Formik, Form } from "formik";
import { CategoriesFormValidation } from "components/Form/categories/CategoriesFormValidation";
import { useToast } from "@chakra-ui/react";
import { createCategory } from "api/api";
import { useAuthentication } from "hooks/useAuthentication";
import { Flex, FlexItem, InputField } from "components/Common";

export const CategoriesForm = forwardRef(({ ...rest }, ref) => {
  const toast = useToast();
  const {
    user: { user },
  } = useAuthentication();

  return (
    <Formik
      initialValues={{ name: "" }}
      validationSchema={CategoriesFormValidation}
      innerRef={ref}
      onSubmit={(data) => {
        createCategory({
          name: data.name,
          createdAt: new Date(),
          userId: user.uid,
          color: data.color,
        }).then(({ status, title, message }) => {
          toast({
            title,
            description: message,
            status,
            duration: 9000,
            isClosable: true,
            position: "bottom-left",
          });
        });
      }}
    >
      {(props) => {
        return (
          <Form className="form">
            <div className="form__content">
              <Flex fullWidth="true">
                <FlexItem lg={6} md={6} sm={12} xs={4}>
                  <InputField label="Category Name" name="name" type="text" />
                </FlexItem>
                <FlexItem lg={6} md={6} sm={12} xs={4}>
                  <InputField
                    label="Choose a color"
                    name="color"
                    type="color"
                  />
                </FlexItem>
              </Flex>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
});
