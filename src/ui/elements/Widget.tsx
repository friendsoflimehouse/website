import { FC } from "react";
import { GridItem, GridItemProps, chakra, Center } from "@chakra-ui/react";
// import { transform } from "framer-motion";

export type WidgetProps = GridItemProps;

export const Widget: FC<WidgetProps> = (props) => {
  return (
    <WidgetContainer {...props}>
      <Center>
          {props.children}
      </Center>
    </WidgetContainer>
  );
};

const WidgetContainer = chakra(GridItem, {
    baseStyle: {
      outline: "2px solid rgba(0, 0, 0, 0.1)",
      flexDirection: "column",
      boxSize: "border-box",
      borderRadius: "md",
      padding: 20,
      overflow: "scroll",
      py: "20px",
      px: "15px",
      boxShadow: "xl", 
      transition: "all 0.33s",
    }
})
