import React, { forwardRef } from "react";
import { Link } from "react-router-dom";

export const NavLink = forwardRef(({ to, children, ...rest }, ref) => {
    return (
        <Link {...rest} to={to || '#'} ref={ref}>{children}</Link>
    )
});