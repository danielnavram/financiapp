import React from "react";
import { Table, Thead, Tbody, Tr, Th, TableCaption } from "@chakra-ui/react";

export function TableList({ headers, caption, children }) {
  return (
    <Table variant="simple" className="table">
      <TableCaption>{caption}</TableCaption>
      <Thead className="table__header">
        <Tr>
          {headers.map((item, index) => (
            <Th key={index}>{item}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>{children}</Tbody>
    </Table>
  );
}
