import React from "react";

import { useField } from "formik";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";

export function InputField(props) {
  const [field, meta] = useField(props.name);

  return (
    <FormControl id={props.name} isInvalid={meta.error && meta.touched}>
      <FormLabel>{props.label}</FormLabel>
      <Input type={props.type} {...field} {...props} />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
}
