import React from "react";

import "./Table.css";

export default function Table({ titles, children }) {
  return (
    <table className="table">
      <thead>
        <tr>
          {titles.map((title) => (
            <th key={title}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}
