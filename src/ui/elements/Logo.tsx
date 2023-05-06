import { Box, Img } from "@chakra-ui/react";
import logoUrl from '~/assets/images/logo.svg'

export const Logo = () => {
  return (
    <Box w="128px" overflow="hidden">
      <Img src={logoUrl} />
    </Box>
  );
};
