import React from "react";
import { DropdownMenu, Icon } from "components/Common";
import { useAuthentication } from "hooks/useAuthentication";
import { logout } from "api/authfirebase";
import { useToast } from "@chakra-ui/react";

export const Avatar = ({ url, alt }) => {
  const { setUser } = useAuthentication();
  const toast = useToast();
  const handleLogout = () => {
    toast({
      title: "Bye Bye!",
      description:
        "You have been logged out successfully. We hope you back soon",
      status: "info",
      duration: 5000,
      position: "bottom-left",
      isClosable: true,
    });
    setUser({ status: "logout", error: null, user: null });
    logout();
  };

  const options = [
    { icon: <Icon name="trash" />, name: "Profile", link: "/profile" },
    { icon: <Icon name="document" />, name: "Log out",  onClick: handleLogout },
  ];

  return (
    <div className="avatar">
      <DropdownMenu
        button={
          <button className="avatar__link">
            <div className="avatar__image-container">
              <img className="avatar__image" alt={alt} src={url} />
            </div>
          </button>
        }
        items={options}
      />
    </div>
  );
};
