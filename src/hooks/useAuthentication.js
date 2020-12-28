import { useContext } from "react";

import AuthContext from "../context/AuthContext";

export function useAuthentication() {
    return useContext(AuthContext);
}