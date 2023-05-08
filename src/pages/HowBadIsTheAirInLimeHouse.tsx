import {
  Box,
  Card,
  CardBody,
  Heading,
  StackDivider,
  Text,
  Stack,
} from "@chakra-ui/react";

export const HowBadIsTheAirInLimeHouse = () => {
  return (
    <Card variant="unstyled">
      <CardBody>
        <Stack divider={<StackDivider />} spacing="8">
          <Box>
            <Heading
              size="sm"
              textTransform="uppercase"
              fontWeight={400}
              color="green.500"
            >
              Our Environment Problem
            </Heading>
            <Text pt="2">
              Limehouse is among the worst polluted areas in London and highest
              by 30% in Tower Hamlets. Nitrogen Dioxide (NO2) and Particulate
              Matter (PM10), referring to particles less than 10 microns
              (millionths of a metre) in diameter, are among the key pollutants.
              They come from car emissions
            </Text>
          </Box>
          <Box>
            <Heading
              size="sm"
              textTransform="uppercase"
              fontWeight={400}
              color="green.500"
            >
              NO2 Pollution
            </Heading>
            <Text pt="2">
              NO2 levels in Limehouse are around 80 μg/m3 with the UK legal
              limits at 40 μg/m3 and WHO recommendations at 25 μg/m3. Exposure
              to NO2 causes inflammation of the airways and can lead to asthma,
              bronchitis and lung cancer. It reduces the life expectancy by at
              least 6 months. A recent study by King's College notes that
              children in Tower Hamlets are growing up with reduced lung
              capacity due to NO2 exposure
            </Text>
          </Box>
          <Box>
            <Heading
              size="sm"
              textTransform="uppercase"
              fontWeight={400}
              color="green.500"
            >
              M10 Pollution
            </Heading>
            <Text pt="2">
              According to WHO report, PM10 can accumulate in the respiratory
              system and can result in a number of health effects ranging from
              coughing and wheezing to asthma attacks, bronchitis, heart attacks
              and strokes. The impacts are most severely felt by vulnerable
              people such as children, older people and those with existing
              heart and lung conditions. PM10 are so small, they can get very
              deep in the lungs, from there into the bloodstream and cause
              various types of cancer. WHO calls PM10 the main source of cancer
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};
