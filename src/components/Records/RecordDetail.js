import React from "react";
import { Flex, FlexItem } from "components/Common";
import { Heading } from "@chakra-ui/react";
import NumberFormat from "react-number-format";
import { format } from "date-fns";

export const RecordDetail = ({ title, date, description, value, type }) => {
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
            <p className="record__value record--date">
              {format(date.toDate(), "iii dd MMMM, yyyy")}
            </p>
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
            <NumberFormat
              className={
                "record__value" && type === "income" ? "income" : "expense"
              }
              value={value}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
              renderText={(value, props) => <p {...props}>{value}</p>}
            />
          </FlexItem>
        </Flex>
      </div>
    </div>
  );
};
