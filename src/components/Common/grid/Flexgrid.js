import React from "react";

const mapProps = {
  xs: "col-xs",
  sm: "col-sm",
  md: "col-md",
  lg: "col-lg",
  xl: "col-xl",
};

const mapClasses = {
  spacebetween: "grid--space-between",
  spacearound: "grid--space-around",
  aligncenter: "grid--align-center",
  justifycontent: "grid--justify-center",
  justifyend: "grid--justify-end",
  columns: "grid--horizontal",
};

const getColumnsProps = (props) => {
  return Object.keys(props)
    .filter((key) => mapProps[key])
    .map((key) => {
      return `${mapProps[key]}-${props[key]}`;
    })
    .join(" ");
};

const getClassesProps = (props) => {
  return Object.keys(props)
    .filter((key) => mapClasses[key])
    .map((key) => {
      return `${mapClasses[key]}`;
    })
    .join(" ");
};

export const Flex = ({ children, fullWidth, ...rest }) => {
  const classGrid = fullWidth ? "grid-0" : "grid";
  return (
    <div className={[classGrid, getClassesProps(rest)].join(" ")} {...rest}>
      {children}
    </div>
  );
};

export const FlexItem = ({ children, ...rest }) => {
    const size = getColumnsProps(rest);
  return <div className={`${size} ${rest.className ? rest.className : ''}`}>{children}</div>;
};
