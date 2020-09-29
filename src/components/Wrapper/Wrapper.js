import React, { useContext } from "react";
import { Route } from "wouter";

import AuthContext from "../../context/AuthContext";
import LoginPage from "../../pages/LoginPage";
import RegisterPage from "../../pages/RegisterPage";
import ResetPasswordPage from "../../pages/ResetPasswordPage";
import Logout from "../Auth/LogoutButton";
import Dashboard from "../Dashboard/Dashboard";
import Home from "../../pages/HomePage";
import ProfilePage from "../../pages/ProfilePage";
import CategoryPage from "../../pages/CategoryPage";
import EntriesPage from "../../pages/EntriesPage";

export default function Wrapper() {
  const user = useContext(AuthContext);
  return (
    <div className="wrapper">
      {user ? (
        <>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/categories" component={CategoryPage} />
          <Route path="/entries" component={EntriesPage} />
        </>
      ) : (
        <>
          <Route path="/" component={Home} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={RegisterPage} />
          <Route path="/resetpassword" component={ResetPasswordPage} />
          <Route path="/logout" component={Logout} />
        </>
      )}
    </div>
  );
}
