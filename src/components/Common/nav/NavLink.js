import React from "react";

import { Link } from "react-router-dom";

export function NavLink({ to, children, ...rest }) {
    return (
        <Link {...rest} to={to}>{children}</Link>
    )
}