import React, { useRef } from "react";
import { Flex, FlexItem, Card, Button } from "components/Common";
import { CategoriesForm } from "components/Form/categories/CategoriesForm";
import { CategoriesList } from "components/Table/CategoriesList";
import { TableList } from "components/Table/TableList";
import { Layout } from "components/Layout";

export default function Categories() {
  const categoriesRef = useRef();

  const handleSubmit = () => {
    if (categoriesRef.current) {
      categoriesRef.current.handleSubmit();
    }
  };

  return (
    <Layout user="true">
      <Flex>
        <FlexItem lg={"6"}>
          <Card title="Categories">
            <TableList
              caption="All your categories goes here!"
              headers={["Name", "Created At", "Actions"]}
            >
              <CategoriesList />
            </TableList>
          </Card>
        </FlexItem>
        <FlexItem lg={"6"}>
          <Card
            title="New Category"
            options={{
              button: (
                <Button
                  variant="secondary"
                  onClick={handleSubmit}
                  name="Create"
                />
              ),
            }}
            border
          >
            <CategoriesForm ref={categoriesRef} />
          </Card>
        </FlexItem>
      </Flex>
    </Layout>
  );
}
