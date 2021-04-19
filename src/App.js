import React from "react";
import { AuthContextProvider } from "context/AuthContext";
import Routes from "components/Routes/Routes";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "components/Theme";
import { RecordsContextProvider } from "context/RecordsContext";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AuthContextProvider>
        <RecordsContextProvider>
          <Routes />
        </RecordsContextProvider>
      </AuthContextProvider>
    </ChakraProvider>
  );
}

export default App;
