import React, { useRef, useState } from "react";
import { Flex, FlexItem, Card, Button, Icon, Modal } from "components/Common";
import { Layout } from "components/Layout";
import { Tag, useDisclosure } from "@chakra-ui/react";
import { TransactionsForm } from "components/Form/transactions/TransactionsForm";
import { TableList } from "components/Table/TableList";
import { RecordsList } from "components/Table/RecordsList";
import { RecordDetail } from "components/Table/RecordDetail";

export default function TransactionsPage() {
  const [selectedRecord, setSelection] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const transactionsRef = useRef();
  const handleSubmit = () => {
    if (transactionsRef.current) {
      transactionsRef.current.submitForm();
      onClose();
    }
  };

  const handleSelection = (data) => {
    setSelection({ ...data, status: "success" });
  };

  console.log(selectedRecord);

  return (
    <Layout user>
      <Flex>
        <FlexItem lg={8}>
          <Card
            title="Transactions"
            options={{
              button: (
                <Button
                  variant="primary"
                  icon={<Icon name="record" size="18px" />}
                  name="New Record"
                  onClick={onOpen}
                />
              ),
            }}
          >
            <TableList
              caption="All your records are here!"
              headers={["Title", "Category", "Date", "Value", "Actions"]}
            >
              <RecordsList handleSelection={handleSelection} />
            </TableList>
          </Card>
          <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="New Record"
            handleSubmit={handleSubmit}
          >
            <TransactionsForm ref={transactionsRef} />
          </Modal>
        </FlexItem>
        <FlexItem lg={4}>
          <Card
            title="Transaction Details"
            options={{
              button: (selectedRecord &&
                <Tag color={selectedRecord.color}>
                  {selectedRecord.category}
                </Tag>
              ),
            }}
          >
            {selectedRecord ? <RecordDetail {...selectedRecord} /> : 'Please select a row to see the details'}
          </Card>
        </FlexItem>
      </Flex>
    </Layout>
  );
}
