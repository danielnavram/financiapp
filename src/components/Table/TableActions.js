import React from "react";

import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

export function TableActions() {
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>Actions</MenuButton>
            <MenuList>
                <MenuItem>Edit</MenuItem>
                <MenuItem>Delete</MenuItem>
            </MenuList>
        </Menu>
    )
}