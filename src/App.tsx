import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./AppRouter";
import { theme } from './theme'

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={AppRouter} />
    </ChakraProvider>
  );
}
