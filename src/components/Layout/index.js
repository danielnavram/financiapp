import React from "react";
import { Header, Subtitle } from "components/Header";
import { useAuthentication } from "hooks/useAuthentication";

export const Layout = ({ title, children }) => {
  const {
    user: { user },
  } = useAuthentication();
  return user ? (
    <>
      <Header user={user} />
      <Subtitle title={title} />
      {children}
    </>
  ) : (
    <>
      {children}
    </>
  );
};
