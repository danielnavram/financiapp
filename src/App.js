import React from "react";
import { AuthContextProvider } from "context/AuthContext";
import Routes from "components/Routes/Routes";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
    </ChakraProvider>
  );
}

export default App;
