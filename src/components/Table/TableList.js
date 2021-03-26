import React from "react";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  ButtonGroup,
  useToast,
} from "@chakra-ui/react";
import { useCategoriesList } from "hooks/useCategoriesList";
import { deleteCategory } from "api/api";
import { DropdownMenu, Tag, Icon } from "components/Common";

import { Loading } from "components/Status/Loading";

export function TableList({ headers = {}, content = {} }) {
  const { categories, status } = useCategoriesList();
  const toast = useToast();

  const handleDeleteCategory = (id) => {
    deleteCategory(id).then(({ title, message, status }) =>
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
  return (
    <Table variant="simple" className="table">
      <TableCaption>All your categories are here!</TableCaption>
      <Thead className="table__header">
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
                <Td>
                  <Tag color={item.color}>{item.name}</Tag>
                </Td>
                <Td>
                  {new Date(item.createdAt.toDate()).toLocaleDateString(
                    "us-EN"
                  )}
                </Td>
                <Td className="table__column">
                  <ButtonGroup space={"2"}>
                    <DropdownMenu
                      button={<Icon name={"more"} size={"20px"} />}
                      items={[
                        {
                          name: "Delete",
                          icon: <Icon name="trash" />,
                          onClick: () => handleDeleteCategory(item.id)
                        },
                        {
                          name: "Modify",
                        }
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
        )}
      </Tbody>
    </Table>
  );
}
