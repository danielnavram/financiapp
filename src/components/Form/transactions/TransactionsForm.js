import React, { forwardRef, useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { TransactionsFormValidation } from "components/Form/transactions/TransactionsFormValidation";
import { useToast } from "@chakra-ui/react";
import { createRecord, getCategories } from "api/api";
import { useAuthentication } from "hooks/useAuthentication";
import { Flex, FlexItem, InputField, SelectField } from "components/Common";
import { DB } from "../../../api/config";

export const TransactionsForm = forwardRef(({ ...rest }, ref) => {
  const toast = useToast();
  const {
    user: { user },
  } = useAuthentication();
  const [handleCategories, setCategories] = useState();

  useEffect(() => {
    DB.collection("categorias")
      .where("userId", "==", user.uid)
      .onSnapshot((doc) => {
        let categories = [];
        return doc.forEach((cat) => {
          categories.push({ value: cat.data().name, label: cat.data().name });
          setCategories(categories);
        });
      });
  }, []);

  return (
    <Formik
      initialValues={{
        title: "",
        date: "",
        category: "",
        value: "",
        description: "",
      }}
      validationSchema={TransactionsFormValidation}
      innerRef={ref}
      onSubmit={(data) => {
        createRecord({
          title: data.title,
          date: data.date,
          category: data.category,
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
      {(props) => {
        console.log(props);
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
                    options={handleCategories}
                    onChange={(value) =>
                      props.setFieldValue("category", value.value)
                    }
                    value={props.values.category}
                  />
                </FlexItem>
                <FlexItem lg={"6"}>
                  <InputField name="date" label="Date" type="date" />
                  <InputField name="value" label="Value" type="number" />
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
