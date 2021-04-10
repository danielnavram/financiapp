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
      <Route exact path="/" component={HomePage} redirectUrl="/login" />
      <AuthRoute path="/login" component={LoginPage} />
      <AuthRoute
        path="/reset-password"
        component={ResetPasswordPage}
        redirectUrl="/login"
      />
      <AuthRoute path="/register" component={RegisterPage} />
      <AuthRoute
        path="/dashboard"
        component={DashboardPage}
        logged
        redirectUrl="/login"
      />
      <AuthRoute
        path="/categories"
        component={CategoriesPage}
        logged
        redirectUrl="/login"
      />
      <AuthRoute
        path="/transactions"
        component={TransactionsPage}
        logged
        redirectUrl="/login"
      />
    </Router>
  );
}
