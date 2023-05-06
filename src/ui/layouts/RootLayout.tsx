import { Outlet } from "react-router-dom";
import { Container } from "@chakra-ui/react";

export const RootLayout = () => {
  return (
    <>
      <Container
        maxW="container.xl"
        minW="container.lg"
        minH={"100vh"}
        maxH={"100vh"}
        overflowY="scroll"
        p={2}
      >
        <Outlet />
      </Container>
    </>
  );
};
