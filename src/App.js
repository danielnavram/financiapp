import React from "react";
import "./App.css";

import { NavbarContextProvider } from "./context/NavbarContext";
import { AuthContextProvider } from "./context/AuthContext";
import { NotificationContextProvider } from "./context/NotificationContext";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Wrapper from "./components/Wrapper/Wrapper";
import Notification from "./components/Notification/Notification";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <NotificationContextProvider>
          <NavbarContextProvider>
            <Header title="FinanciApp" />
            <Navbar />
          </NavbarContextProvider>
          <Wrapper />
          <Notification />
        </NotificationContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
