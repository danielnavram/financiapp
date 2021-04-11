import React from "react";
import { Flex, Avatar } from "components/Common";
import { Logo, NavMenu } from "components/Header";

export const Header = ({ user }) => {
  return (
    <div className="nav">
      <Flex spacebetween="true" fullWidth="true" aligncenter="true">
        <Logo />
        <NavMenu />
        <div className="user">
          {/* <Icon className="user__icon" name="notification" size={"24px"} />
          <Icon className="user__icon" name="chat" size={"24px"} /> */}
          <Avatar
            url={user.photoURL || "assets/images/user.png"}
            alt={user.displayName}
          />
        </div>
      </Flex>
    </div>
  );
};
