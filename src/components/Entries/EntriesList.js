import React from "react";

import Card from "../../components/Card/Card";
import Table from "../../components/Table/Table";
import TableEntries from "../../components/Table/TableEntries";
import { useEntriesList } from "../../hooks/useEntriesList";

export default function EntriesList() {
  const entries = useEntriesList();

  return (
    <Card title="Listado de registros">
      <Table
        titles={["Fecha", "Tipo", "Nombre", "Categoria", "Valor", "Acción"]}
      >
        <TableEntries datos={entries} />
      </Table>
    </Card>
  );
}
