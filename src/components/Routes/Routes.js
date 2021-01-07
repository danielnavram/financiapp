import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "components/Routes/PrivateRoute";
import AuthRoute from "components/Routes/AuthRoute";

import HomePage from "pages/HomePage";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";
import DashboardPage from "pages/DashboardPage";
import CategoriesPage from "pages/CategoriesPage";
// import ProfilePage from "pages/ProfilePage";
import Header from "components/Header/Header";
import ResetPasswordPage from "pages/ResetPasswordPage";

export default function Routes() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={HomePage} />
      <AuthRoute path="/login" component={LoginPage} />
      <AuthRoute path="/reset-password" component={ResetPasswordPage} />
      <AuthRoute path="/register" component={RegisterPage} />
      <PrivateRoute path="/dashboard" component={DashboardPage} />
      <PrivateRoute path="/categories" component={CategoriesPage} />
      {/* <PrivateRoute path="/profile" component={ProfilePage} /> */}
    </Router>
  );
}
