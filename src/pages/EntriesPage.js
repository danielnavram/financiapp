import React from "react";

import AddEntries from "../components/Entries/AddEntries";
import EntriesList from "../components/Entries/EntriesList";

export default function EntriesPage() {
  return (
    <>
      <AddEntries />
      <EntriesList />
    </>
  );
}
