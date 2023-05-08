import {
  Flex,
  Link,
  HStack,
  VStack,
  Button,
  Box,
  Img,
  Text,
  Avatar,
} from "@chakra-ui/react";
import logoUrl from "~/assets/images/logo.svg";
import doc1CoverUrl from "~/assets/images/doc1cover.png";
import doc2CoverUrl from "~/assets/images/doc2cover.png";

import doc1Url from "~/assets/docs/2.6.20_FOL_GI_Masterplan_Arup_proposal_03.pdf";
import doc2Url from "~/assets/docs/UCL_GI_Report.pdf";

import watermarkUrl from "~/assets/images/watermark.svg";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export const SidePane = () => {
  return (
    <HStack h="100%">
      <Flex h={"100%"}>
        <VStack justifyContent="space-between" px={2}>
          <Box>
            <VStack alignItems="flex-start" p={2}>
              <Box mt={2} position="relative">
                <Link href="/">
                  <HStack transform="translate(-42px, 0)">
                    <Img
                      src={watermarkUrl}
                      objectFit="fill"
                      h="68px"
                      transform="translate(15px, 0)"
                    />
                    <Img src={logoUrl} objectFit="fill" h="80px" />
                  </HStack>
                </Link>
              </Box>
              <Box transform="translateY(-20px)">
                <Box
                  bgColor="rgb(243, 243, 243)"
                  p={3}
                  pb={12}
                  transform="translate(-15px, 20px) skew(0deg)"
                  zIndex="-1"
                  fontWeight={400}
                  border="1px solid"
                  borderColor="gray.200"
                  boxShadow="md"
                >
                  <Text fontSize="small">
                    <Box>
                      Hi! Friends of limehouse is local residents group
                      established to help protect and enhance our natural
                      environment in:
                    </Box>
                  </Text>
                  <Text fontSize="small">
                    <Link
                      href="//www.google.com/maps/place/Limehouse,+London/@51.5131086,-0.0403149,16z/data=!3m1!4b1!4m6!3m5!1s0x487602cc9084a36f:0xdc052b64b53340e7!8m2!3d51.5110598!4d-0.0366652!16zL20vMG5iZHg"
                      isExternal
                      borderBottom="1px solid silver"
                    >
                      Limehouse, Tower Hamlets, East London
                    </Link>
                  </Text>

                  <Text pt={3}>
                    <Text
                      bgColor="rgb(182, 209, 246)"
                      display="inline"
                      fontSize="small"
                    >
                      You have questions? Drop us an email anytime:
                    </Text>
                    <Flex
                      p={"7px"}
                      gap={3}
                      alignItems="center"
                      justifyContent="flex-start"
                    >
                      <Avatar name="Marina Walker" size={"sm"} />
                      <Link
                        href="mailto:marina.k.walker@gmail.com"
                        fontSize="small"
                        borderBottom="1px solid silver"
                      >
                        Marina Walker
                      </Link>
                    </Flex>

                    <Text py={3} fontSize="small">
                      We would greatly appreciate your support in our
                      environment project. Please consider following our social
                      media channels to stay up-to-date on our progress:
                    </Text>
                    <HStack gap={1}>
                      <Link
                        href="//www.linkedin.com/company/94161947/"
                        isExternal
                      >
                        <Button
                          colorScheme="linkedin"
                          variant="link"
                          size={"xs"}
                          leftIcon={<FaLinkedin />}
                        >
                          LinkedIn
                        </Button>
                      </Link>

                      <Link
                        href="//instagram.com/friendsoflimehouse"
                        isExternal
                      >
                        <Button
                          size={"xs"}
                          color="rgb(56, 81, 133)"
                          variant="ghost"
                          leftIcon={<FaInstagram />}
                        >
                          Instagram
                        </Button>
                      </Link>
                    </HStack>
                  </Text>
                </Box>
                <Text
                  fontSize="small"
                  fontWeight={400}
                  textIndent="10"
                  letterSpacing={"0.8px"}
                  border="1px solid"
                  transform="translate(5px, -12px) skew(0deg)"
                  borderColor="yellow.300"
                  bgColor="yellow.100"
                  boxShadow="md"
                  p={3}
                >
                  Air pollution in Limehouse is one of the worst in London and
                  is over twice the legal limit due to the fumes from the
                  Rotherhithe tunnel and Limehouse Link Tunnels and the lack of
                  green space.
                  <br />
                  This affects the health and wellbeing of the residents,
                  particularly children and the elderly, with a larger than
                  national average number of asthma and other allergic and
                  cardiovascular diseases
                </Text>

                <Box position="relative">
                  <Text pb={2} fontSize={"sm"}>
                    Research Files:
                  </Text>
                  <Box mixBlendMode="darken">
                    <Link href={doc1Url} isExternal>
                      <Img src={doc1CoverUrl} h={128} />
                      <Text fontSize="11px" transform="translate(-4px, 5px)">
                        Masterplan (ARUP)
                      </Text>
                    </Link>
                  </Box>
                  <Box transform="translate(100px, -140px)">
                    <Link href={doc2Url} isExternal>
                      <Img src={doc2CoverUrl} w={128} />
                      <Text fontSize="11px" transform="translate(20px, 5px)">
                        Report #1 (UCL)
                      </Text>
                    </Link>
                  </Box>
                </Box>
              </Box>
            </VStack>
          </Box>
        </VStack>
      </Flex>
    </HStack>
  );
};