import React from "react";

import {
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import { NavLink } from "components/Header/NavLink";

export function Navbar() {
  const { onClose, isOpen, onOpen } = useDisclosure();

  return (
    <>
      <Button
        variant="hgost"
        p={0}
        m={0}
        leftIcon={<HamburgerIcon w="2em" h="2em" />}
        onClick={onOpen}
      ></Button>
      <Drawer onClose={onClose} isOpen={isOpen} placement="left">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody pt={10}>
                <NavLink to="/dashboard" onClick={onClose}>Dashboard</NavLink>
                <NavLink to="/profile" onClick={onClose}>Profile</NavLink>
                <NavLink to="/categories" onClick={onClose}>Categories</NavLink>
                <NavLink to="/entries" onClick={onClose}>Entries</NavLink>
                <NavLink to="/settings" onClick={onClose}>Settings</NavLink>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}
