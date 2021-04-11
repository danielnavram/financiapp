import React, { forwardRef, useState } from "react";
import { Formik, Form } from "formik";
import { TransactionsFormValidation } from "components/Form/transactions/TransactionsFormValidation";
import { useToast } from "@chakra-ui/react";
import { createRecord } from "api/api";
import { useAuthentication } from "hooks/useAuthentication";
import { Flex, FlexItem, InputField, SelectField } from "components/Common";
import { useCategoriesList } from "hooks/useCategoriesList";
import NumberFormat from "react-number-format";

export const TransactionsForm = forwardRef(({ ...rest }, ref) => {
  const toast = useToast();
  const [color, setColor] = useState();
  const {
    user: { user },
  } = useAuthentication();
  const { categories } = useCategoriesList();

  return (
    <Formik
      initialValues={{
        title: "",
        date: "",
        category: {},
        value: "",
        description: "",
      }}
      validationSchema={TransactionsFormValidation}
      innerRef={ref}
      onSubmit={(data) => {
        createRecord({
          title: data.title,
          date: data.date,
          category: { name: data.category, color },
          userId: user.uid,
          value: data.value,
          description: data.description,
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
      {({ values, setFieldValue, ...rest }) => {
        return (
          <Form className="form">
            <div className="form__content">
              <Flex fullWidth="true">
                <FlexItem lg={"6"}>
                  <InputField name="title" label="Title" type="text" />
                  <SelectField
                    type="text"
                    name="category"
                    label="Categories"
                    options={categories}
                    onChange={(value) => {
                      setFieldValue("category", value.value);
                      setColor(value.color);
                    }}
                    value={values.category}
                  />
                </FlexItem>
                <FlexItem lg={"6"}>
                  <InputField name="date" label="Date" type="date" />
                  <InputField name="value" label="Value" type="number" />
                  {/* <NumberFormat
                    customInput={InputField}
                    name="value"
                    label="Value"
                    thousandSeparator={true}
                  /> */}
                </FlexItem>
                <FlexItem lg={"12"}>
                  <InputField
                    name="description"
                    label="Description"
                    type="text"
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
