import React from "react";

import Layout from "components/Layout/Layout";
import { Heading } from "@chakra-ui/react";

export default function DashboardPage() {
  return (
    <Layout>
      <Heading>This is the dashboard page and is private route</Heading>
    </Layout>
  );
}
