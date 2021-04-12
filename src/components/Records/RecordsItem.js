import React from "react";
import { useRecordsList } from "hooks/useRecordsList";
import { deleteRecord } from "../../api/api";
import { DropdownMenu, Icon, Tag } from "components/Common";
import { Loading } from "components/Status/Loading";
import { Tr, Td, ButtonGroup, useToast } from "@chakra-ui/react";
import { RecordItem } from "components/List";
import NumberFormat from "react-number-format";

export const RecordsItem = ({handleSelection}) => {
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
          <RecordItem {...record} />
      );
    })
  ) : (
      <Loading />
  );
};
