import React, { useState } from "react";

const NotificationContext = React.createContext({});

export function NotificationContextProvider({ children }) {
  const [message, setMessage] = useState("");
  const [active, setActive] = useState(false);
  const [type, setType] = useState("info");
  return (
    <NotificationContext.Provider
      value={{ message, setMessage, active, setActive, type, setType }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext;
