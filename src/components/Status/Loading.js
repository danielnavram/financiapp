import React from "react";
import { Spinner, Box } from "@chakra-ui/react";

export function Loading() {
  return (
    <Box margin="50% 0" textAlign="center">
      <Spinner size="lg" />
    </Box>
  );
}
