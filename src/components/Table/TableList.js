import React from "react";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Button,
  ButtonGroup,
  Tag
} from "@chakra-ui/react";
import { useCategoriesList } from "hooks/useCategoriesList";

import { TableActions } from "components/Table/TableActions";
import { Loading } from "components/Status/Loading";

export function TableList({ headers = {}, content = {} }) {
  const { categories, status } = useCategoriesList();

  return (
    <Table variant="simple">
      <TableCaption>All your categories are here!</TableCaption>
      <Thead>
        <Tr>
          {headers.map((item, index) => (
            <Th key={index}>{item}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {status === "success" ? (
          categories.map((item, index) => {
            return (
              <Tr key={index}>
                <Td><Tag bg={item.color}>{item.name}</Tag></Td>
                <Td>
                  {new Date(item.createdAt.toDate()).toLocaleDateString(
                    "us-EN"
                  )}
                </Td>
                <Td>
                  <ButtonGroup space={"2"}>
                    <Button size="sm">Edit</Button>
                    <Button size="sm">Delete</Button>
                  </ButtonGroup>
                </Td>
              </Tr>
            );
          })
        ) : (
          <Loading />
        )}
      </Tbody>
    </Table>
  );
}
