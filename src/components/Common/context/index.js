import React, { forwardRef, useState, useRef } from "react";
import { NavLink, Icon, useClick } from "components/Common";

/**
 * * Options params receive an array of objects: { icon, title, to }
 */
export const ContextMenu = forwardRef(
  ({ darkMode, options, setIsOpen, isOpen, ...rest }, ref) => {
    const addClass = isOpen ? "active" : "";
    return (
      <div
        ref={ref}
        className={`context ${addClass} ${darkMode ? "context--dark" : ""}`}
      >
        <ul className="context__list">
          {options.map((item, index) => (
            <li className="context__item" key={index}>
              <NavLink to={item.to} onClick={() => setIsOpen(false)}>
                <Icon name={item.icon} size={"16px"} />
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    );
  }
);

export const DropdownMenu = ({ button, darkMode, isOpen, items, ...rest }) => {
  const ref = useRef();
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  useClick(ref, () => setOpen(false));

  return (
    <div className={`context ${darkMode ? "context--dark" : ""}`} ref={ref}>
      <button
        className="context__button"
        onClick={() => toggle(!open)}
        {...rest}
      >
        {button}
      </button>
      {open && (
        <ul className="context__list">
          {items.map(({ link, icon, name, ...rest }, index) => (
            <li className="context__item" key={index}>
              <NavLink to={link} onClick={() => toggle(!open)} {...rest}>
                {icon}
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
