import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import AuthRoute from "components/Routes/AuthRoute";
import HomePage from "pages/HomePage";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";
import OverviewPage from "pages/OverviewPage";
import CategoriesPage from "pages/CategoriesPage";
import RecordsPage from "pages/RecordsPage";
import ResetPasswordPage from "pages/ResetPasswordPage";

export default function Routes() {
  return (
    <Router>
      <Route exact path="/" component={HomePage} redirectUrl="/overview" />
      <AuthRoute path="/login" component={LoginPage} redirectUrl="/overview" />
      <AuthRoute
        path="/reset-password"
        component={ResetPasswordPage}
      />
      <AuthRoute
        path="/register"
        component={RegisterPage}
      />
      <AuthRoute
        path="/overview"
        component={OverviewPage}
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
        path="/records"
        component={RecordsPage}
        redirectUrl="/login"
        logged
      />
      <Redirect path="*" to="/login" />
    </Router>
  );
}
