import React, { useState } from "react";
import Select from "react-select";
import { Icon, Flex } from "components/Common";
import { useField } from "formik";
import {
  FormControl,
  InputLeftElement,
  FormErrorMessage,
  FormLabel,
  Input as InputChakra,
  Box,
} from "@chakra-ui/react";

export const InputField = ({
  name,
  label,
  type,
  iconName,
  focusBorderColor,
  ...rest
}) => {
  const [field, meta] = useField(name);
  return (
    <FormControl id={name} isInvalid={meta.error && meta.touched}>
      <FormLabel fontSize={14}>{label}</FormLabel>
      <InputLeftElement children={<Icon name={iconName} />} />
      <InputChakra
        type={type}
        variant="filled"
        rounded={5}
        bg="rgba(219, 222, 226, 0.3)"
        borderColor="rgba(15, 13, 28, 0.3)"
        _hover={{
          bg: "rgba(219, 222, 226, 0.1)",
          borderColor: "rgba(15, 13, 28, 0.7)",
        }}
        _focus={{
          bg: "rgba(219, 222, 226, 0.3)",
          borderColor: focusBorderColor || "#0F0D1C",
        }}
        errorBorderColor={"#E22037"}
        {...field}
        {...rest}
      />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export const SelectField = ({ name, label, iconName, options, ...rest }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [field, meta] = useField(name);
  const [selectedValue, setSelectedValue] = useState(null);
  const customStyles = {
    control: (provided, state) => ({
      backgroundColor: "rgba(219,222,226,0.3)",
      border: "2px solid",
      borderColor: state.isFocused ? "rgba(15,13,28,0.7)" : "rgba(15,13,28,0.3)",
      borderRadius: "5px",
      display: "flex",
      height: "2.5rem",
      maxWidth: "100%",
      padding: "0 6px",
    })
  }

  return (
    <FormControl id={name} isInvalid={meta.error && meta.touched}>
      <FormLabel fontSize={14}>{label}</FormLabel>
      <InputLeftElement children={<Icon name={iconName} />} />
      <Select styles={customStyles} options={options} name={name} {...rest} />
      {/* <Flex name={name} className="select" columns="true">
        <Box className="select__list">
          {options &&
            options.map((obj) => (
              <Box
                className="select__item"
                value={obj.label}
                onClick={() => setSelectedValue(obj)}
              >{obj.value}</Box>
            ))}
        </Box>
      </Flex> */}
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );  
};