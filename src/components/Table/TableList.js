import React from "react";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";

import { TableActions } from "components/Table/TableActions";

export function TableList({ headers = {}, content = {} }) {
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
        <Tr>
          <Td>Food</Td>
          <Td>2020-12-31</Td>
          <Td>
              <TableActions />
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
}
