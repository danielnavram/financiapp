import React from "react";
import { Flex, FlexItem } from "components/Common";
import { Heading } from "@chakra-ui/react";
import { Loading } from "components/Status/Loading";

export const Card = ({ title, border, options, children }) => {
  return (
    <div className="card">
      {title && (
        <div className={`card__title ${border ? "card__title--border" : ""}`}>
          <Flex fullWidth="true" spacebetween="true" aligncenter="true">
            <Heading as={"h3"} fontSize={"20px"}>
              {title}
            </Heading>
            {options?.button || options?.context}
          </Flex>
        </div>
      )}
      <div className="card__body">{children}</div>
    </div>
  );
};

export const CardItem = ({ title, children, loading, options }) => {
  return (
    <FlexItem lg={4} md={4} sm={2} xs={4}>
      <Card title={title} options={options}>
        {loading ? <Loading /> : children}
      </Card>
    </FlexItem>
  );
};

