import React from "react";

import { Link as RouterLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";

export function NavLink({ to, children, ...props }) {
    return (
        <Link as={RouterLink} {...props} to={to} d="block" m="15px 0">{children}</Link>
    )
}