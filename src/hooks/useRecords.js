import { useContext } from "react";
import RecordsContext from "context/RecordsContext";

export function useRecords() {
    return useContext(RecordsContext);
}