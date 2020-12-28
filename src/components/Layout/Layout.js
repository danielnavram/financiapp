import React from "react";

import { BrowserRouter as Router } from "react-router-dom";

import { Container } from "components/Container/Container";

export default function Layout({ children }) {
  return (
    <Router>
      <Container>{children}</Container>
    </Router>
  );
}
