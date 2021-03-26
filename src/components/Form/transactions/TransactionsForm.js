import React, { forwardRef } from "react";
import { Formik, Form } from "formik";
import { CategoriesFormValidation } from "components/Form/categories/CategoriesFormValidation";
import { useToast } from "@chakra-ui/react";
import { createCategory } from "api/api";
import { useAuthentication } from "hooks/useAuthentication";
import { Flex, FlexItem, InputField, SelectField } from "components/Common";

export const TransactionsForm = forwardRef(({ ...rest }, ref) => {
  const toast = useToast();
  const {
    user: { user },
  } = useAuthentication();

  const options = [
      {value: "test 1", label: "test 1"},
      {value: "test 2", label: "test 2"}
  ]

  return (
    <Formik
      initialValues={{ name: "Food" }}
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
                <FlexItem lg={"6"}>
                  <InputField name="title" label="Title" type="text" />
                  <SelectField name="categories" label="Categories" options={options} />
                </FlexItem>
                <FlexItem lg={"6"}>
                  <InputField name="date" label="Date" type="date" />
                  <InputField name="value" label="Value" type="number" />
                </FlexItem>
                <FlexItem lg={"12"}>
                    <InputField name="description" label="Description" type="text" />
                </FlexItem>
              </Flex>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
});
