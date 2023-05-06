import { Outlet } from "react-router-dom";
import { Box, GridItem, Grid, Text, Container } from "@chakra-ui/react";
// import { Logo } from "~/ui/elements";

const layout = `
  "header header"
  "main main"
  "footer footer"
`;

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
