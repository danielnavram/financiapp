import React from "react";
import Select from "react-select";
import { Icon } from "components/Common";
import { useField, useFormikContext } from "formik";
import {
  FormControl,
  InputLeftElement,
  FormLabel,
  Input as InputChakra,
} from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import { addDays } from "date-fns";

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
    <FormControl
      className="form__control"
      id={name}
      isInvalid={meta.error && meta.touched}
    >
      <FormLabel className="form__label">{label}</FormLabel>
      <InputLeftElement children={<Icon name={iconName} />} />
      <InputChakra
        type={type}
        variant="filled"
        rounded={5}
        autoComplete="off"
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
    </FormControl>
  );
};

export const SelectField = ({
  name,
  label,
  iconName,
  options,
  onChange,
  value,
  ...rest
}) => {
  const [field, meta] = useField(name);

  const dot = (color) => ({
    backgroundColor: color || "rgba(15,13,28,0.7)",
    borderRadius: 10,
    content: '" "',
    display: "block",
    marginRight: 8,
    height: 10,
    width: 10,
  });

  const customStyles = {
    control: (provided, state) => ({
      backgroundColor: "rgba(219,222,226,0.3)",
      border: "2px solid",
      borderColor: state.isFocused
        ? "rgba(15,13,28,0.7)"
        : "rgba(15,13,28,0.3)",
      borderRadius: "5px",
      display: "flex",
      height: "2.5rem",
      maxWidth: "100%",
      padding: "0 0.25rem",
    }),
    option: (styles, { data }) => {
      return {
        cursor: "pointer",
        padding: "0.5rem 0.75rem",
        alignItems: "center",
        display: "flex",
        transition: "all 0.3s",
        ":before": dot(data.color),
        ":hover": {
          backgroundColor: "rgba(200,200,200,0.3)",
        },
      };
    },
    input: (styles, { data }) => ({
      left: "1.5rem",
      display: "flex",
      alignItems: "center",
    }),
    placeholder: (styles, { data }) => ({
      ...styles,
      display: "flex",
      alignItems: "center",
      ":before": dot(data?.color),
    }),
    singleValue: (styles, { data }) => ({
      ...styles,
      display: "flex",
      alignItems: "center",
      ":before": dot(data?.color),
    }),
  };

  const defaultValue = (options, value) => {
    return options ? options.find((option) => option.value === value) : "";
  };

  return (
    <FormControl
      className="form__control"
      id={name}
      isInvalid={meta.error && meta.touched}
    >
      <FormLabel className="form__label">{label}</FormLabel>
      <InputLeftElement children={<Icon name={iconName} />} />
      <Select
        {...field}
        {...rest}
        name={name}
        options={options}
        onChange={(value) => onChange(value)}
        styles={customStyles}
        value={defaultValue(options, value)}
      />
    </FormControl>
  );
};

export const CheckboxToggle = ({ name, title, onChange }) => {
  return (
    <div className="checkbox">
      <label className="checkbox__label" htmlFor={name}>
        {title}
      </label>
      <input
        className="checkbox__input"
        type="checkbox"
        name={name}
        id={name}
        onChange={onChange}
      />
    </div>
  );
};

export const DateField = ({ name, label, type, iconName, onChange, rest }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);
  return (
    <FormControl
      className="form__control"
      id={name}
      isInvalid={meta.error && meta.touched}
    >
      <FormLabel className="form__label">{label}</FormLabel>
      <InputLeftElement children={<Icon name={iconName} />} />
      <DatePicker
        {...field}
        {...rest}
        maxDate={addDays(new Date(), 4)}
        selected={(field.value && new Date(field.value)) || null}
        onChange={(val) => {
          setFieldValue(name, val);
        }}
      />
    </FormControl>
  );
};
