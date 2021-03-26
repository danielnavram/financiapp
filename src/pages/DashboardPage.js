import React from "react";

import {Layout} from "components/Layout";
import { Heading } from "@chakra-ui/react";

export default function DashboardPage() {
  return (
    <Layout user="true">
      <Heading>This is the dashboard page and is private route</Heading>
    </Layout>
  );
}
