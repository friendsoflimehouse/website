import {
  Box,
  Text,
  Heading,
  StackDivider,
  Card,
  CardBody,
  Stack,
} from "@chakra-ui/react";

export const WhyLimeHouseNeedsGreenInfrastructure = () => {
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
            <Text pt="2" fontSize="md">
              We aim to develop and implement an evidence-based, strategic
              approach to tackle pollution in Limehouse
            </Text>
          </Box>
          <Box>
            <Heading
              size="sm"
              textTransform="uppercase"
              fontWeight={400}
              color="green.500"
            >
              Planting Trees is Not Enough
            </Heading>
            <Text pt="2" fontSize="md">
              Simply planting trees is not a sufficient solution, as planting
              them on the wrong side of the road can increase pollution
            </Text>
          </Box>
          <Box>
            <Heading
              size="sm"
              textTransform="uppercase"
              fontWeight={400}
              color="green.500"
            >
              Expertise is Needed for Improvement
            </Heading>
            <Text pt="2" fontSize="md">
              Improving air quality is a complex process that requires
              expertise. To this end, we have reached out to ARUP, a team of
              global air pollution experts, who are willing to conduct research
              in the area and provide recommendations for a master plan
            </Text>
          </Box>
          <Box>
            <Heading
              size="sm"
              textTransform="uppercase"
              fontWeight={400}
              color="green.500"
            >
              Cost of Improvement
            </Heading>
            <Text pt="2" fontSize="md">
              While this plan would cost £50K, it is necessary for the
              improvement of air quality in the area
            </Text>
          </Box>
          <Box>
            <Heading
              size="sm"
              textTransform="uppercase"
              fontWeight={400}
              color="green.500"
            >
              Empowering the Community
            </Heading>
            <Text pt="2" fontSize="md">
              We believe that the residents of Limehouse deserve a safe and
              healthy environment, and we want to empower them by returning
              agency to the community
            </Text>
          </Box>
          <Box>
            <Heading
              size="sm"
              textTransform="uppercase"
              fontWeight={400}
              color="green.500"
            >
              Lack of Action from Tower Hamlets Council
            </Heading>
            <Text pt="2" fontSize="md">
              We recognize that Tower Hamlets Council has a budget for tackling
              pollution, but they are not taking sufficient action
            </Text>
          </Box>
          <Box>
            <Heading
              size="sm"
              textTransform="uppercase"
              fontWeight={400}
              color="green.500"
            >
              Working Together for a Solution
            </Heading>
            <Text pt="2" fontSize="md">
              Therefore, we need to work together to implement an evidence-based
              strategy for tackling pollution in Limehouse
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};
