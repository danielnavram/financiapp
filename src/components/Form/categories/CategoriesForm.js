import React, {useState} from "react";
import { Formik, Form } from "formik";
import { CategoriesFormValidation } from "components/Form/categories/CategoriesFormValidation";

import { ColorPicker } from "components/Form/categories/ColorPicker";
import { InputField } from "components/Form/InputField";
import { Box, Button } from "@chakra-ui/react";
import { createCategory } from "api/api";
import { useAuthentication } from "hooks/useAuthentication";

export const CategoriesForm = () => {
  const [colorPicker, setColorPicker] = useState({ color: "#FFCF00" });
  const {
    user: { user },
  } = useAuthentication();

  const handleColorPicker = (color) => {
    setColorPicker(color);
  }

  return (
    <Formik
      initialValues={{ name: "Food" }}
      validationSchema={CategoriesFormValidation}
      onSubmit={(data) => {
        createCategory({
          name: data.name,
          createdAt: new Date(),
          userId: user.uid,
          color: colorPicker.color,
        }).then((res) => console.log(res));
      }}
    >
      {(props) => {
        return (
          <Box m="0 auto" w={["100%", "100%", "50%"]}>
            <Form>
              <InputField name="name" label="Category Name" type="text" />
              <ColorPicker colorSelector={handleColorPicker} defaultColor={colorPicker} />
              <Button type="submit" mt="30px">
                Create
              </Button>
            </Form>
          </Box>
        );
      }}
    </Formik>
  );
};
