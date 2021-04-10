import React from "react";
import { Header, Subtitle, Logo } from "components/Header";
import { BrowserRouter as Router } from "react-router-dom";

export const Layout = ({ user, children }) => {
  return user ? (
    <>
      <Header />
      <Subtitle />
      {children}
    </>
  ) : (
    <>
      {children}
    </>
  );
};
