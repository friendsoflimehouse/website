import {
  Box,
  Accordion,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  AccordionItem,
} from "@chakra-ui/react";

export const GetStartedPage = () => (
  <>
    <Box>
      Friends of Limehouse is a local residents group established to help
      protect and enhance our natural environment in Limehouse, Tower Hamlets,
      East London. Air pollution in Limehouse is one of the worst in London and
      is over twice the legal limit due to the fumes from the Rotherhithe tunnel
      and Limehouse Link Tunnels and the lack of green space. This affects the
      health and wellbeing of the residents, particularly children and the
      elderly, with a larger than national average number of asthma and other
      allergic and cardiovascular diseases.
    </Box>
    <Accordion>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              How bad is the air in Limehouse?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Friends of Limehouse is a local residents group established to help
          protect and enhance our natural environment in Limehouse, Tower
          Hamlets, East London. Air pollution in Limehouse is one of the worst
          in London and is over twice the legal limit due to the fumes from the
          Rotherhithe tunnel and Limehouse Link Tunnels and the lack of green
          space. This affects the health and wellbeing of the residents,
          particularly children and the elderly, with a larger than national
          average number of asthma and other allergic and cardiovascular
          diseases.{" "}
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              What we want?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
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
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Why Limehouse needs Green Infrastructure 
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          As a part of the Neighbourhood Forum, we organized four personal
          consultations and a media one with several hundred residents of
          Limehouse that defined four priorities that the community has: Not
          enough open spaces (Green Infrastructure) Not enough
          facilities (Facilities and Services) Not enough little
          businesses (Retail and Employment) Not enough housing (Housing and
          Heritage) Most participants emphasized the lack of Green
          Infrastructure. See more{" "}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  </>
);
