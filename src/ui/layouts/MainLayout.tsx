import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import {
  Grid,
  Icon,
  Tabs,
  Flex,
  Text,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  Box,
  GridItem,
  VStack,
} from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { routes, onlyHeaderLinks } from "~/routes";
import { SidePane } from "~/ui/elements";

export const MainLayout = () => {
  const navigate = useNavigate();
  const headerNavRoutes = routes.filter(onlyHeaderLinks);
  const { pathname: p } = useLocation();
  const defaultSelectionIndex = headerNavRoutes.findIndex(
    ({ path }) => p === path
  );
  const [selectionIndex, setSelectionIndex] = useState(defaultSelectionIndex);

  const selectRoute = (routeIndex: number) => {
    setSelectionIndex(routeIndex);
    navigate(headerNavRoutes[routeIndex].path);
  };
  return (
    <Grid templateColumns="repeat(5, 2fr)" gap={4} p={0} h={"100vh"}>
      <GridItem colSpan={1} h={"100%"}>
        <SidePane />
      </GridItem>

      <GridItem colSpan={4} h={"100%"}>
        <Tabs
          pt={"40px"}
          index={selectionIndex}
          isManual
          variant="soft-rounded"
          colorScheme="green"
          onChange={selectRoute}
          h="100%"
        >
          <VStack h="100%" overflow="hidden">
            <TabList pb={5}>
              {headerNavRoutes.map(({ name: routeName, icon }) => (
                <Tab whiteSpace="nowrap" fontWeight={500}>
                  <Flex gap={2} alignItems="center">
                    {icon && <Icon as={icon} />}
                    <Text>{routeName}</Text>
                  </Flex>
                </Tab>
              ))}
            </TabList>
            <TabPanels h="100%">
              {headerNavRoutes.map(() => (
                <TabPanel pt={0}>
                  <Box p={8} boxShadow={"2xl"}>
                    <Outlet />
                  </Box>
                </TabPanel>
              ))}
            </TabPanels>
          </VStack>
        </Tabs>
      </GridItem>
    </Grid>
  );
};
