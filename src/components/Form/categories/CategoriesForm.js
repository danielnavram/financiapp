import React, { forwardRef, useState } from "react";
import { Formik, Form } from "formik";
import { CategoriesFormValidation } from "components/Form/categories/CategoriesFormValidation";
import { useToast } from "@chakra-ui/react";
import { createCategory } from "api/api";
import { useAuthentication } from "hooks/useAuthentication";
import { Flex, FlexItem, InputField } from "components/Common";

export const CategoriesForm = forwardRef(({ ...rest }, ref) => {
  const toast = useToast();
  // const [colorPicker, setColorPicker] = useState({ color: "#FFCF00" });
  const {
    user: { user },
  } = useAuthentication();

  // const handleColorPicker = (color) => {
  //   setColorPicker(color);
  // };

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
                  <InputField name="name" label="Category Name" type="text" />
                </FlexItem>
                <FlexItem lg={"6"}>
                  <InputField name="color" label="Choose a color" type="color" />
                  {/* <ColorPicker
                    colorSelector={handleColorPicker}
                    defaultColor={colorPicker}
                  /> */}
                </FlexItem>
              </Flex>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
});
