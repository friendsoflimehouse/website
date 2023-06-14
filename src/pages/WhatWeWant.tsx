import {
  Text,
  Card,
  Heading,
  CardBody,
  Box,
  Stack,
} from "@chakra-ui/react";

export const WhatWeWant = () => {
  return (
    <Card variant="unstyled">
      <CardBody>
        <Stack spacing="8">
        <Box>
        <Text pt="2" fontSize="md">
        Friends of Limehouse is an East London non-profit organization focused on improving the local environment starting with air quality. We want to transform local air quality by uniting residents, communities, businesses, and authorities to support London's ambition as a Green City. Together, we must persuade the Council of Tower Hamlets to do its work in addressing air pollution strategically.
            </Text>
            </Box>
          <Box>
            <Heading
              size="sm"
              textTransform="uppercase"
              fontWeight={400}
              color="green.500"
            >
              Issue
            </Heading>
            <Text pt="2" fontSize="md">
            Air pollution in Limehouse is one of the worst in London and is higher by 30% than in the rest of Tower Hamlets. It is over twice the legal limit due to the fumes from the Rotherhithe and Limehouse Link Tunnels and the lack of green space.

Air pollution affects the health and well-being of all Limehouse residents, particularly children and older generations, with a larger than national average number of asthma and other allergic and cardiovascular diseases.

Limehouse still looks like when it was a working dock, with very little green space. There's only 23,3% of open space, and opportunities to provide additional open space are extremely limited, given how densely populated it is.

Air pollution mainly comes from using cars. The latest TfL data shows that Tower Hamlets has the lowest car ownership rate of any London borough. Despite its <Link color="blue.500" href="https://www.london.gov.uk/sites/default/files/air_quality_for_public_health_professionals_-_lb_tower_hamlets.pdf" isExternal>legal</Link> obligation improve air quality in the area, the Council of Tower Hamlets welcomes more traffic to pass through the borough. To address environmental and other issues, the Council allocates annually a proportion of the funding received from developers, called the Local Infrastructure Fund. In response to our request, the Council claimed that this budget is not accessible.
            </Text>
          </Box>
          <Box>
            <Heading
              size="sm"
              textTransform="uppercase"
              fontWeight={400}
              color="green.500"
            >
              Solution
            </Heading>
            <Text pt="2" fontSize="md">
            Improving air quality is a complex process requiring a strategic, evidence-based approach. We need to reduce the number of cars, manage traffic using modern AI systems, provide safe walking and cycling options, and build Green Infrastructure absorbing pollution.

As part of the Neighbourhood Forum, we organized four personal consultations and a media one with several hundred residents of Limehouse. Most participants emphasized the lack of open spaces — in other words, Green Infrastructure.

We invited <Link color="blue.500" href="hhttps://www.ucl.ac.uk/" isExternal>UCL</Link> to find evidence for these results. UCL's <Link color="blue.500" href="hhttps://friendsoflimehouse.com/assets/UCL_GI_Report-f548f68b.pdf" isExternal>
reserch</Link> states that Limehouse is the most polluted area of Tower Hamlets, with three times the population density of London and not enough green space, which is a <Link color="blue.500" href="https://www.towerhamlets.gov.uk/lgnl/planning_and_building_control/planning_policy_guidance/Local_plan/local_plan.aspx" isExternal>Local Plan</Link>stated deficiency.

With these results, we came to <Link color="blue.500" href="https://www.arup.com/" isExternal>ARUP</Link>, the world's leading architectural bureau specializing in air pollution. ARUP <Link color="blue.500" href="https://friendsoflimehouse.com/assets/2.6.20_FOL_GI_Masterplan_Arup_proposal_03-167d00af.pdf" isExternal>proposed</Link> creating a Green Infrastructure Master Plan for Limehouse. Master Plan would provide a vision for sustainable development of the area reducing air pollution, uniting and empowering local communities and mitigating climate change. It will cost £50,000, plus its implementation and regular maintenance.

To address vehicle emissions, we have corresponded with the GLA and <Link color="blue.500" href="hhttps://tfl.gov.uk/" isExternal>TfL</Link> to request a highway assessment of the local road network. Adjustments to specific junction layouts and signal phasing timings could result in improved traffic flows and significant reductions in air pollution.

<Link color="blue.500" href="https://www.london.gov.uk/" isExternal>GLA</Link>, <Link color="blue.500" href="hhttps://www.sustrans.org.uk/" isExternal>SusTrans</Link>, <Link color="blue.500" href="https://www.breathelondon.org//" isExternal>Breathe London</Link>, and <Link color="blue.500" href="https://www.ciht.org.uk/" isExternal>CIHT</Link> support our vision for improving air quality in Limehouse.
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};
