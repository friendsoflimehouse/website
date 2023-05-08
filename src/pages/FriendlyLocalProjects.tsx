import { List, ListItem, Link } from "@chakra-ui/react";

export const FriendlyLocalProjects = () => {
  return (
    <List spacing={1}>
      <ListItem>
        <Link color="blue.500" href="//heartbg.uk" isExternal>
          Save Our Safer Streets in Bethnal Green
        </Link>
      </ListItem>
      <ListItem>
        <Link
          color="blue.500"
          href="//www.thepetitionsite.com/472/269/886/save-our-st-george-pool-shadwell/"
          isExternal
        >
          Save St George’s Swimming Pool in Wapping
        </Link>
      </ListItem>
      <ListItem>
        <Link
          color="blue.500"
          href="//poplarneighbourhoodplanningforum.com"
          isExternal
        >
          Poplar Neighbourhood Planning Forum
        </Link>
      </ListItem>
      <ListItem>
        <Link color="blue.500" href="https://romanroadtrust.co.uk" isExternal>
          Roman Road Trust
        </Link>
      </ListItem>
    </List>
  );
};
