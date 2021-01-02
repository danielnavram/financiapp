import React from "react";

import { useField } from "formik";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";

export function InputFile(props) {
  const [field, meta] = useField(props.name);
  return (
    <FormControl id={props.name} isInvalid={meta.error && meta.touched}>
      <FormLabel>{props.label}</FormLabel>
      <Input
        type="file"
        name={field.name}
        onChange={field.onChange}
        onBlur={field.onBlur}
        {...props}
      />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
}
