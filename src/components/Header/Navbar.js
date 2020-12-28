import React from "react";

import {
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  List,
  Link
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import { Link as RouterLink } from "react-router-dom";

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
                <Link as={RouterLink} to="/dashboard">Dashboard</Link>
                <Link>Categories</Link>
                <Link>Entries</Link>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}
