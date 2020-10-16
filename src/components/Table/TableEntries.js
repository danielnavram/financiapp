import React from "react";

import RemoveEntry from "../Entries/RemoveEntry";

export default function TableEntries({ datos }) {
  return (
    <>
      {datos
        ? datos.map((doc) => {
            return (
              <tr key={doc.id}>
                <td>{doc.date}</td>
                <td>{doc.type === "exp" ? "Gasto" : "Ingreso"}</td>
                <td>{doc.title}</td>
                <td>{doc.categoryName}</td>
                <td>{doc.value}</td>
                <td>
                  <RemoveEntry docId={doc.id} />
                  {/* <span className="label label--info">
              <i className="fas fa-edit"></i>
            </span> */}
                </td>
              </tr>
            );
          })
        : "No hay datos"}
    </>
  );
}
