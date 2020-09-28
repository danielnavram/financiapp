import React from "react";

import Card from "../Card/Card";
import Table from "../Table/Table";
import TableCategories from "../Table/TableCategories";
import { useCategoriesList } from "../../hooks/useCategoriesList";

export default function ListCategories({ user }) {
  const categorias = useCategoriesList();

  return (
    <Card title="Lista de categorias">
      <Table titles={["Categoria", "Fecha", "Acciones"]}>
        <TableCategories datos={categorias} />
      </Table>
    </Card>
  );
}
