import {
  Grid,
  Text,
  Box,
  Divider,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Img,
  Flex,
} from "@chakra-ui/react";
import { Widget } from "~/ui/elements";
import logoUrl from "~/assets/images/logo.svg";
import WatermarkUrl from "~/assets/images/watermark.svg";

export const GetStartedPage = () => {
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={2}>
      <Widget
        w="100%"
        h="100%"
        colSpan={2}
        bg="rgb(180, 250, 120)"
        position="relative"
      >
        <Img
          src={WatermarkUrl}
          w={24}
          h={24}
          position="absolute"
          top="-24px"
          left="55px"
        />
        <Flex flexDirection="column">
          <Img src={logoUrl} w={512} h={256} />
          <Box>
            <Divider />
            <Text>
              We are residents group established to help protect and enhance our
              natural environment in
            </Text>
            <Text>Limehouse, Tower Hamlets, East London.</Text>
          </Box>
        </Flex>
      </Widget>
      <Widget w="100%" h="100%" bg="black" colSpan={1} color="white">
        <Text>
          <StatGroup>
            <Stat>
              <StatLabel>Air Quality Index</StatLabel>
              <StatNumber>2023</StatNumber>
              <StatHelpText>
                <StatArrow type="decrease" />
                23.36%
              </StatHelpText>
            </Stat>
          </StatGroup>
          Air pollution in Limehouse is one of the worst in London and is over
          twice the legal limit due to the fumes from the Rotherhithe tunnel and
          Limehouse Link Tunnels and the lack of green space.
        </Text>
      </Widget>
      <Widget w="100%" h="400px" bg="gray.700" color="white" colSpan={1}>
        <Text>
          This affects the health and wellbeing of the residents, particularly
          children and the elderly, with a larger than national average number
          of asthma and other allergic and cardiovascular diseases.
        </Text>
      </Widget>
      <Widget w="100%" bg="gray.100" colSpan={2}>
        As a part of the Neighbourhood Forum, we organized four personal
        consultations and a media one with several hundred residents of
        Limehouse that defined four priorities that the community has: Not
        enough open spaces (Green Infrastructure) Not enough
        facilities (Facilities and Services) Not enough little
        businesses (Retail and Employment) Not enough housing (Housing and
        Heritage) Most participants emphasized the lack of Green Infrastructure.
      </Widget>
      <Widget w="100%" h="250px" bg="red.300">
        <Text>
          This affects the health and wellbeing of the residents, particularly
          children and the elderly, with a larger than national average number
          of asthma and other allergic and cardiovascular diseases.
        </Text>
      </Widget>
      <Widget w="100%" h="200px" bg="gray.500">
        Why Limehouse needs Green Infrastructure
      </Widget>

      <Widget w="100%" h="200px" colSpan={5} bg="gray.500">
        <Text>
          We want to reverse this by developing and following an evidence-based,
          strategic approach to tackle pollution. We can’t just plant some trees
          and hope they will absorb the pollution. Planting the trees on the
          wrong road side can only increase pollution. Improving air quality is
          a sophisticated process. We have reached out to ARUP, a global team of
          experts in air pollution. ARUP is happy to do research on the area and
          provide systematic recommendations. Their master plan would cost £50K.
          We would need extra budget for its implementation. Tower Hamlets
          Council does have a budget for tackling pollution but is not taking
          action to improve the air quality in the area.We want Limehouse to be
          a safe, healthy space for the local community to flourish. We want to
          return the agency to Limehouse residents. We can do this together.{" "}
        </Text>
      </Widget>
    </Grid>
  );
};

{
  /* <Widget w="100%" h="100%" bg="black" colSpan={1} color="white">
<Text>
  <StatGroup>
    <Stat>
      <StatLabel>Air Quality Index</StatLabel>
      <StatNumber>2019</StatNumber>
      <StatHelpText>
        <StatArrow type="decrease" />
        23.36%
      </StatHelpText>
    </Stat>
  </StatGroup>
  Air pollution in Limehouse is one of the worst in London and is over
  twice the legal limit due to the fumes from the Rotherhithe tunnel and
  Limehouse Link Tunnels and the lack of green space.
</Text>
</Widget> */
}
