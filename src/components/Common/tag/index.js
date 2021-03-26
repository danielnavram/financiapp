import React from 'react';

export const Tag = ({ children, color, ...rest  }) => {
    return (
        <span className="tag" style={{backgroundColor: color}}>
            {children}
        </span>
    )
}
