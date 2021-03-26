import React from "react";
import { Button as ChakraButton } from "@chakra-ui/react";

const styles = {
    bg: {
        default: "#DBDEE2",
        primary: "#68E0E1",
        secondary: "#0F0D1C",
    },
    color: {
        default: "#0F0D1C",
        primary: "#0F0D1C",
        secondary: "#DBDEE2",
    },
    hover: {
        default: "#0F0D1C",
        primary: "#0F0D1C",
        secondary: "#68E0E1",
    }
}

export const Button = ({ icon, name, size, variant, ...rest }) => {
  return (
    <ChakraButton
      {...rest}
      bg={styles.bg[variant]}
      border="none"
      cursor="pointer"
      rounded="5px"
      fontSize={`${size ? size : "14px"}`}
      color={styles.color[variant]}
      _hover={{
          color: styles.hover[variant],
      }}>
          {icon}
          {name}
    </ChakraButton>
  );
};
