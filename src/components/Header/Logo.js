import React from "react";

import { Link } from "react-router-dom";
import { Navbar } from "components/Header/Navbar";
import { Box, Heading } from "@chakra-ui/react";

export function Logo({ children }) {
  return (
    <Box p="2" d="flex" alignItems="center">
      <Navbar />
      <Heading fontSize={{ base: "1.5em", lg: "2em", xl: "2em" }}>
        <Link to="/">{ children }</Link>
      </Heading>
    </Box>
  );
}
