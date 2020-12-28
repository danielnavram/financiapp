import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "components/Routes/PrivateRoute";

import HomePage from "pages/HomePage";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";
import DashboardPage from "pages/DashboardPage";
import Header from "components/Header/Header";

export default function Wrapper() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <PrivateRoute path="/dashboard" component={DashboardPage} />
    </Router>
  );
}
