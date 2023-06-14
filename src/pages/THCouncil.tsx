import { Text, Card, CardBody, Link } from "@chakra-ui/react";

export const THCouncil = () => {
  return (
    <Card variant="unstyled">
      <CardBody>

          <Text mb={4}>
            The latest TfL data shows that Tower Hamlets has the lowest car ownership rate of any London borough. Tower Hamlets Council is <Link color="blue.500" href="https://www.standard.co.uk/news/transport/tower-hamlets-funding-loss-lutfur-rahman-b1070138.html?fbclid=IwAR15AKqQfExQnLnsBcmgLThfi78dOZqRbVCiP2U2kqMxYWEy9ReaZg1GoSU#lfrws5idixigk2qnr5" isExternal>reversing</Link> the <Link color="blue.500" href="https://talk.towerhamlets.gov.uk/liveablestreets" isExternal>Liveable Streets</Link> program that has been running in Europe for the last 30 years, bringing in more traffic through the area, particularly back roads, which is against the government’s policies. Despite stating that it would <Link color="blue.500" href="https://www.towerhamlets.gov.uk/lgnl/environment_and_waste/environmental_health/pollution/air_quality/Breathe_Clean/Air-Quality-Action-Plan.aspx" isExternal>improve the air quality</Link> in Tower Hamlets, the Council is bringing in the largest pollutant — vehicle exhaust fumes. Expanding ULEZ is a big step, but this alone — or even switching to electric cars — won’t solve the issue as electric cars produce a lot of PM10 when in use. We need to reduce the number of cars and provide infrastructure for cycling and walking.
          </Text>
          <Text mb={4}>
            When we asked the Council members to support our Green Infrastructure plan, they refused, adding, “This would raise people’s expectations”.
          </Text>
          <Text mb={4}>
            To address environmental and other issues, the Council allocates annually a proportion of the funding received from developers, called the Local Infrastructure Fund, in response to community requests. Once approved, officers scope the work based on their judgement rather than evidence of need. The last significant Local Infrastructure Fund allocation for Limehouse was in 2019/20 for £420,000 to cover greening, much of it to reduce air pollution, but the work has been put on hold.
          </Text>
          <Text mb={4}>
            The Council receives millions from developers in Limehouse as required contributions to offset the impact of their development, but very little is spent in Limehouse. £400,000 allocated since 2020 for greening is currently on hold and £800,000 so far received for the recent ibis hotel construction in Westferry. Still, no plans exist for significantly using this amount in Limehouse.
          </Text>
          <Text mb={4}>
            We need residents to be aware of these issues. Together, we must persuade the Council of Tower Hamlets to do its work in addressing air pollution strategically.
          </Text>
      </CardBody>
    </Card>

    );
};
