import React from "react";
import {
  Alert as ChakraAlert,
  AlertIcon,
  AlertDescription,
  useToast,
} from "@chakra-ui/react";

export const Alert = ({ status, description }) => {
  const toast = useToast();
  return toast({
    position: "top",
    render: () => (
      <ChakraAlert status={status} variant="left-accent">
        <AlertIcon />
        <AlertDescription>{description}</AlertDescription>
      </ChakraAlert>
    ),
    duration: 9000,
  });
};
