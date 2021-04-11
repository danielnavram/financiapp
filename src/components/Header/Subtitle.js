import React from "react";
import { Flex } from "components/Common";
import { Heading, Input } from "@chakra-ui/react";

export const Subtitle = ({ title, ...rest }) => {
  return (
    <div className="subtitle">
      <Flex spacebetween="true" aligncenter="true" fullWidth>
        <Heading
          as={"h1"}
          fontSize={"24px"}
          lineHeight={"26px"}
          className="subtitle__heading"
        >
          {title}
        </Heading>
        <div className="subtitle__search">
          <Input variant="filled" placeholder={`Search on your dashboard`} />
        </div>
      </Flex>
    </div>
  );
};
