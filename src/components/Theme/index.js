import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    default: {
      500: "#DBDEE2",
    },
    primary: {
      500: "#0F0D1C",
    },
    secondary: {
      500: "#68E0E1",
    },
    active: {
      500: "#DBDEE2",
    }
  },
  fonts: {
    body: "'Open Sans', sans-serif",
    span: "'Open Sans', sans-serif",
    heading: "'Roboto', sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: "default.500",
        color: "primary.500",
      },
    },
  },
});
