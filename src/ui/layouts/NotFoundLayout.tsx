import {
  Grid,
  GridItem,
  Flex,
  VStack,
  HStack,
  Text,
  Img,
  Link,
} from "@chakra-ui/react";
import { SidePane } from "~/ui/elements";
import notFoundImgUrl from "~/assets/images/404.png";
import { routes, onlyHeaderLinks } from "~/routes";

export const NotFoundLayout = () => {
  const headerRoutes = routes.filter(onlyHeaderLinks);
  return (
    <Grid templateColumns="repeat(5, 2fr)" gap={4} p={0} h={"100vh"}>
      <GridItem colSpan={1} h={"100%"}>
        <SidePane />
      </GridItem>
      <GridItem colSpan={4} h={"100%"} overflow="hidden">
        <Flex alignItems="center" h="100%" justifyContent="center">
          <VStack transform={"translateY(-150px)"}>
            <Img src={notFoundImgUrl} h={512} borderRadius={"50%"} />
            <Text pt={10}>404 Page Not Found</Text>
            <HStack gap={5} pt={10}>
              {headerRoutes.map(({ name, path }) => (
                <Link href={path} borderBottom="1px solid silver">
                  {name}
                </Link>
              ))}
            </HStack>
          </VStack>
        </Flex>
      </GridItem>
    </Grid>
  );
};
