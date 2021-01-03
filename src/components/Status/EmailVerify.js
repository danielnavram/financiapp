import React from "react";

import Layout from "components/Layout/Layout";
import { Button, Center } from "@chakra-ui/react";

export function EmailVerify() {
  return (
    <Layout>
      Please check your Email to verify your account. If you aren't receive the
      email, just resend it. If you already verify your email, go to log in
      page.
      <Center m="50px 0">
        <Button as="a" href="/dashboard">
          Go to Dashboard
        </Button>
      </Center>
    </Layout>
  );
}
