import React from "react";

import { Box } from "@chakra-ui/react";

export const Container = (props) => {
  return (
    <Box
      {...props}
      width={{ base: "90%", lg: "100%", xl: "1200px" }}
      pt={4}
      pb={4}
      pl={{ base: 0, lg: 4, xl: 4 }}
      pr={{ base: 0, lg: 4, xl: 4 }}
      m="0 auto"
    >
      {props.children}
    </Box>
  );
};
