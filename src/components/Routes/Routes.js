import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AuthRoute from "components/Routes/AuthRoute";
import HomePage from "pages/HomePage";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";
import DashboardPage from "pages/DashboardPage";
import CategoriesPage from "pages/CategoriesPage";
import TransactionsPage from "pages/TransactionsPage";
import ResetPasswordPage from "pages/ResetPasswordPage";

export default function Routes() {
  return (
    <Router>
      <Route exact path="/" component={HomePage} redirectUrl="/dashboard" />
      <AuthRoute path="/login" component={LoginPage} redirectUrl="/dashboard" />
      <AuthRoute
        path="/reset-password"
        component={ResetPasswordPage}
      />
      <AuthRoute
        path="/register"
        component={RegisterPage}
      />
      <AuthRoute
        path="/dashboard"
        component={DashboardPage}
        redirectUrl="/login"
        logged
      />
      <AuthRoute
        path="/categories"
        component={CategoriesPage}
        redirectUrl="/login"
        logged
      />
      <AuthRoute
        path="/transactions"
        component={TransactionsPage}
        redirectUrl="/login"
        logged
      />
    </Router>
  );
}
