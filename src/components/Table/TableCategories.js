import React, { useContext } from "react";

import NotificationContext from "../../context/NotificationContext";

import RemoveCategorie from "../Categories/RemoveCategorie";

export default function TableCategories({ datos }) {
  return (
    <>
      {datos.map((doc) => {
        console.log();
        return (
          <tr key={doc.id}>
            <td>{doc.name}</td>
            <td>
              {new Date(doc.createdAt.seconds * 1000)
                .toISOString()
                .slice(0, 10)}
            </td>
            <td>
              <RemoveCategorie catId={doc.id} />
              {/* <span className="label label--info">
                <i className="fas fa-edit"></i>
              </span> */}
            </td>
          </tr>
        );
      })}
    </>
  );
}
