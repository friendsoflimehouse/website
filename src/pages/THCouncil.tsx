import {
    Text,
    Card,
    Heading,
    StackDivider,
    CardBody,
    Box,
    Stack,
  } from "@chakra-ui/react";
  
  export const THCouncil = () => {
    return (
      <Card variant="unstyled">
        <CardBody>
          <Stack divider={<StackDivider />} spacing="8">
            <Box>
              <Heading size="sm" textTransform="uppercase" fontWeight={400} color="green.500">
                Tower Hamlets Car Ownership and Environmental Concerns
              </Heading>
            </Box>
  
            <Box>
              <Heading size="md" fontWeight="bold" mb={2}>
                Low Car Ownership Rate
              </Heading>
              <Text>
                The latest TfL data shows that Tower Hamlets has the lowest car ownership rate of any London borough.
                Tower Hamlets Council is reversing the Liveable Streets program that has been running in Europe for the last 30 years,
                bringing in more traffic through the area, particularly back roads, which is against the government’s policies.
                Despite stating that it would improve the air quality in Tower Hamlets, the Council is bringing in the largest pollutant — vehicle exhaust fumes.
                Expanding ULEZ is a big step, but this alone — or even switching to electric cars — won’t solve the issue as electric cars produce a lot of PM10 when in use.
                We need to reduce the number of cars and provide infrastructure for cycling and walking.
              </Text>
            </Box>
  
            <Box>
              <Heading size="md" fontWeight="bold" mb={2}>
                Refusal of Green Infrastructure Plan
              </Heading>
              <Text>
                When we asked the Council members to support our Green Infrastructure plan,
                they refused, adding, “This would raise people’s expectations”.
              </Text>
            </Box>
  
            <Box>
              <Heading size="md" fontWeight="bold" mb={2}>
                Local Infrastructure Fund Allocation
              </Heading>
              <Text>
                To address environmental and other issues, the Council allocates annually a proportion of the funding received from developers,
                called the Local Infrastructure Fund, in response to community requests.
                Once approved, officers scope the work based on their judgement rather than evidence of need.
                The last significant Local Infrastructure Fund allocation for Limehouse was in 2019/20 for £420,000 to cover greening,
                much of it to reduce air pollution, but the work has been put on hold.
              </Text>
            </Box>
  
            <Box>
              <Heading size="md" fontWeight="bold" mb={2}>
                Lack of Investment in Limehouse
              </Heading>
              <Text>
                The Council receives millions from developers in Limehouse as required contributions to offset the impact of their development,
                but very little is spent in Limehouse.
                £400,000 allocated since 2020 for greening is currently on hold and £800,000 so far received for the recent ibis hotel construction in Westferry.
                Still, no plans exist for significantly using this amount in Limehouse.
              </Text>
            </Box>
  
            <Box>
              <Heading size="md" fontWeight="bold" mb={2}>
                Call to Action
              </Heading>
              <Text>
                We need residents to be aware of these issues.
                Together, we must persuade the Council of Tower Hamlets to do its work in addressing air pollution strategically.
              </Text>
            </Box>
  
          </Stack>
        </CardBody>
      </Card>
    );
  };
  