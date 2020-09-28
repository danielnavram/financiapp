import React, { useContext } from "react";

import NotificationContext from "../../context/NotificationContext";

export default function Notification() {
  const { message, type, active, setActive } = useContext(NotificationContext);
  const handleAlertNotification = (e) => {
    setActive(false);
  };

  return (
    <div
      className={
        active ? ["alert", "active", type].join(" ") : ["alert", type].join(" ")
      }
    >
      <div className="alert__content">
        <i className="fas fa-dashboard"></i>
        <p className="alert__text">{message}</p>
      </div>
      <span className="alert__close" onClick={handleAlertNotification}>
        <i className="fas fa-times"></i>
      </span>
    </div>
  );
}
