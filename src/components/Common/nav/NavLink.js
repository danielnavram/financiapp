import React from "react";
import { NavLink as LinkRouter } from "react-router-dom";

export const NavLink = ({ to, children, ...rest }) => {
    return (
        <LinkRouter {...rest} to={to || '#'} activeClassName="active">{children}</LinkRouter>
    )
};