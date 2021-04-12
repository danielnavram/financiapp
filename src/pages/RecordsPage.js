import React, { useRef, useState } from "react";
import {
  Flex,
  FlexItem,
  Card,
  Button,
  Icon,
  Modal,
  Tag,
} from "components/Common";
import { Layout } from "components/Layout";
import { useDisclosure } from "@chakra-ui/react";
import { TransactionsForm } from "components/Form/transactions/TransactionsForm";
import { TableList } from "components/Table/TableList";
import { RecordsList } from "components/Table/RecordsList";
import { RecordDetail } from "components/Table/RecordDetail";
import { RecordsItem } from "components/Records/RecordsItem";

export default function RecordsPage() {
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

  return (
    <Layout title="Records">
      <Flex fullWidth>
        <FlexItem lg={8} md={8} sm={12} xs={4}>
          <Card
            title="Records"
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
            <section className="list">
              <ul className="list__container">
                <RecordsItem />
              </ul>
            </section>
            {/* <TableList
              caption="All your records are here!"
              headers={["Title", "Category", "Date", "Value", "Actions"]}
            >
              <RecordsList handleSelection={handleSelection} />
            </TableList> */}
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
        <FlexItem lg={4} md={4} sm={12} xs={4}>
          <Card
            title="Record Details"
            options={{
              button: selectedRecord && (
                <Tag color={selectedRecord.category.color}>
                  {selectedRecord.category.name}
                </Tag>
              ),
            }}
          >
            {selectedRecord ? (
              <RecordDetail {...selectedRecord} />
            ) : (
              <p className="card__text">
                Please select a row on the list to see the details
              </p>
            )}
          </Card>
        </FlexItem>
      </Flex>
    </Layout>
  );
}
