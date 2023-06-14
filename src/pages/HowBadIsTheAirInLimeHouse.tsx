import {
  Box,
  Card,
  CardBody,
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
            
            <Text pt="2">

Limehouse is among the worst polluted areas in London and highest by 30% in Tower Hamlets.

The key pollutants come from car emissions. They are

🤢 Nitrogen Dioxide (NO2) and

🤢 Particulate Matter (PM10)

NO2 levels in Limehouse are around 80 μg/m3 with the UK legal limits at 40 μg/m3 and WHO recommendations at 25 μg/m3. Exposure to NO2 causes airway <a href="https://www.london.gov.uk/sites/default/files/col_air_quality_for_public_health_professionals.pdf
" target="_blank">inflammation</a> and can lead to asthma, bronchitis and lung cancer. It reduces the life expectancy by at least 6 months. A [recent study by King's College](https://www.kcl.ac.uk/news/air-pollution-restricting-childrens-lung-development) notes that children in Tower Hamlets are growing up with reduced lung capacity due to NO2 exposure.

According to a WHO report https://www.euro.who.int/__data/assets/pdf_file/0006/189051/Health-effects-of-particulate-matter-final-Eng.pdf, PM10 can accumulate in the respiratory system. PM10 are tiny particles, less than 10 microns (millionths of a metre) in diameter. They can accumulate in the lungs and also cause asthma and other allergic and cardiovascular diseases. Because they are so little, they can get into the bloodstream and travel around the body, causing more inflammation. World Health Organization calls PM10 the main source of cancer.

To solve the air pollution problem in Limehouse, we must reduce the number of cars and build Green Infrastructure.
            
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};
