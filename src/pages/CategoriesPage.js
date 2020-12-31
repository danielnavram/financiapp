import React from "react";

import Layout from "components/Layout/Layout";
import { CategoriesForm } from "components/Form/categories/CategoriesForm";
import { TableList } from "components/Table/TableList";

export default function Categories() {
  return (
    <Layout>
      <CategoriesForm />
      <TableList headers={["Name", "Created At", "Actions"]} />
    </Layout>
  );
}
