import React from "react";

import { Box, Flex, Avatar, Text, Button, useToast } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons"
import { useAuthentication } from "hooks/useAuthentication";
import { logout } from "api/authfirebase";

export function UserMenu({name, img}) {
  const { setUser } = useAuthentication();
  const toast = useToast();
  const handleLogout = () => {
    toast({
      title: "Bye Bye!",
      description: "You have been logged out successfully. We hope you back soon",
      status: "info",
      duration: 5000,
      position: "bottom-left",
      isClosable: true 
    })
    setUser({ status: "logout", error: null, user: null });
    logout()
  }

  return (
    <Box>
      <Flex alignItems="center">
          <Text pr={4} fontWeight={700} fontSize={{base: "md", lg: "lg", xl: "lg"}}>{name}</Text>
          <Avatar
            name={name}
            src={img}
          />
          <Button ml={2} variant="ghost" onClick={handleLogout}><CloseIcon /></Button>
      </Flex>
    </Box>
  );
}
