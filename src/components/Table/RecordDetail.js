import React from "react";
import { Flex, FlexItem } from "components/Common";
import { Heading } from "@chakra-ui/react";

export const RecordDetail = ({ title, date, description, value }) => {
  return (
    <div className="record">
      <div className="record__item">
        <Flex fullWidth>
          <FlexItem lg={"6"}>
            <Heading as={"h3"} className="record__title" fontSize={"18px"}>
              Title
            </Heading>
            <p className="record__value">{title}</p>
          </FlexItem>
          <FlexItem lg={"6"}>
            <p className="record__value record--date">{date}</p>
          </FlexItem>
        </Flex>
      </div>
      <div className="record__item">
        <Flex fullWidth>
          <FlexItem lg={"6"}>
            <Heading as={"h3"} className="record__title" fontSize={"18px"}>
              Description
            </Heading>
            <p className="record__value">{description}</p>
          </FlexItem>
          <FlexItem lg={"6"}>
            <Heading as={"h3"} className="record__title" fontSize={"18px"}>
              Value
            </Heading>
            <p className="record__value">{value}</p>
          </FlexItem>
        </Flex>
      </div>
    </div>
  );
};
