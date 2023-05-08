import { Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <Container minW="7xl" maxW="8xl">
      <Outlet />
    </Container>
  );
};
