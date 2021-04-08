import React from "react";
import { Spinner, Box } from "@chakra-ui/react";

export function Loading() {
  return (
    <Box textAlign="center">
      <Spinner size="lg" />
    </Box>
  );
}
