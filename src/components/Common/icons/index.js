import React from "react";

export const Icon = ({ name, className, color, size, style }) => {
    return (
        <span
            className={`icon-${name} ${className || ""}`}
            style={{...style, fontSize: size}}
        />
    )
}