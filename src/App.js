import React from "react";
import { AuthContextProvider } from "context/AuthContext";
import Routes from "components/Routes/Routes";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "components/Theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
    </ChakraProvider>
  );
}

export default App;
