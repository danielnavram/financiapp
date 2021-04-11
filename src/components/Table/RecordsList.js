import React from "react";
import { useRecordsList } from "hooks/useRecordsList";
import { deleteRecord } from "../../api/api";
import { DropdownMenu, Icon, Tag } from "components/Common";
import { Loading } from "components/Status/Loading";
import { Tr, Td, ButtonGroup, useToast } from "@chakra-ui/react";

export const RecordsList = ({handleSelection}) => {
  const { records, status } = useRecordsList();
  const toast = useToast();

  const handleDeleteRecord = (id) => {
    deleteRecord(id).then(({ title, message, status }) =>
      toast({
        title,
        description: message,
        status,
        duration: 9000,
        isClosable: true,
        position: "bottom-left",
      })
    );
  };

  return status === "success" ? (
    records.map((record, index) => {
      return (
        <Tr
          key={index}
          onClick={() =>
            handleSelection(record)
          }
        >
          <Td>{record.title}</Td>
          <Td>
            <Tag color={record.color}>{record.category}</Tag>
          </Td>
          <Td>{record.date}</Td>
          <Td>{record.value}</Td>
          <Td d="none">{record.description}</Td>
          <Td className="table__column">
            <ButtonGroup space={"2"}>
              <DropdownMenu
                button={<Icon name={"more"} size={"20px"} />}
                items={[
                  {
                    name: "Delete",
                    icon: <Icon name="trash" />,
                    onClick: () => handleDeleteRecord(record.id),
                  },
                  {
                    name: "Modify",
                  },
                ]}
              />
            </ButtonGroup>
          </Td>
        </Tr>
      );
    })
  ) : (
    <Tr>
      <Td colSpan={"4"}>
        <Loading />
      </Td>
    </Tr>
  );
};
