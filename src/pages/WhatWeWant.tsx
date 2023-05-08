import {
  Text,
  Card,
  Heading,
  StackDivider,
  CardBody,
  Box,
  Stack,
} from "@chakra-ui/react";

export const WhatWeWant = () => {
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
              Tackle Pollution in Limehouse
            </Heading>
            <Text pt="2" fontSize="md">
              We want to reverse this by developing and following an
              evidence-based, strategic approach to tackle pollution We can’t
              just plant some trees and hope they will absorb the pollution
              Planting the trees on the wrong road side can only increase
              pollution Improving air quality is a sophisticated process We have
              reached out to ARUP, a global team of experts in air pollution
              ARUP is happy to do research on the area and provide systematic
              recommendations. Their master plan would cost £50K.
            </Text>
            <Text pt="2" fontSize="md">
              We would need extra budget for its implementation Tower Hamlets
              Council does have a budget for tackling pollution but is not
              taking action to improve the air quality in the area
            </Text>
          </Box>
          <Box>
            <Heading
              size="sm"
              textTransform="uppercase"
              fontWeight={400}
              color="green.500"
            >
              Vision for a Healthy and Sustainable Limehouse Community
            </Heading>
            <Text pt="2" fontSize="md">
              We want Limehouse to be a safe, healthy space for the local
              community to flourish We want to return the agency to Limehouse
              residents. We can do this together We need an evidence-based,
              strategic approach to tackle pollution instead of just relying on
              planting trees to absorb it Planting trees in the wrong areas
              could even worsen the situation Improving air quality is a complex
              process, and we need expert advice We reached out to ARUP, a team
              of global air pollution experts, and they are willing to conduct
              research on the area and provide systematic recommendations
              However, their master plan will cost £50K, and we'll need
              additional budget to implement it
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};
