import React from "react";

import { Container } from "components/Container/Container";
import { Flex } from "@chakra-ui/react";
import { UserMenu } from "components/Header/UserMenu";
import { Menu } from "components/Header/Menu";
import { Logo } from "components/Header/Logo";

import { useAuthentication } from "hooks/useAuthentication";

export default function Header() {
  const {
    user: { user, status },
  } = useAuthentication();

  return (
    <Container>
      <Flex justify="space-between" alignItems="center">
        <Logo>Financiapp</Logo>
        {status === "success" ? (
          <UserMenu name={user.displayName} img={user.photoURL} />
        ) : (
          <Menu />
        )}
      </Flex>
    </Container>
  );
}
