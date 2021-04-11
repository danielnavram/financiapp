import React from "react";
import {Layout} from "components/Layout";
import { Card, Flex, FlexItem } from "components/Common";

export default function OverviewPage() {
  return (
    <Layout title="Overview">
      <Flex fullWidth>
        <FlexItem lg={4} md={4} sm={2} xs={4}>
          <Card title="Cashflow Behavior">
            Chart goes here
          </Card>
        </FlexItem>
        <FlexItem lg={4} md={4} sm={2} xs={4}>
          <Card title="Current Balance">
            VAlues and percentages
          </Card>
        </FlexItem>
        <FlexItem lg={4} md={4} sm={2} xs={4}>
          <Card title="Cashflow Categories">
            Chart goes here
          </Card>
        </FlexItem>
      </Flex>
    </Layout>
  );
}
