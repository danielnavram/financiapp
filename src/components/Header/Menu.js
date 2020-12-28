import React from "react";

import { Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function Menu() {
  return (
    <Box>
      <Button as={Link} colorScheme="teal" mr="4" to="/register">
        Sign Up
      </Button>
      <Button as={Link} colorScheme="teal" to="/login">Log in</Button>
    </Box>
  );
}
