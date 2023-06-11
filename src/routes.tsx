// pages
import {
  HowBadIsTheAirInLimeHouse,
  FriendlyLocalProjects,
  WhatWeWant,
  WhyLimeHouseNeedsGreenInfrastructure,
  Subscribe,
} from "~/pages";

import { MdOutlineHandshake } from "react-icons/md";
import { BiLeaf } from "react-icons/bi";
import { HiOutlinePuzzle } from "react-icons/hi";
import { FaRegGrimace } from "react-icons/fa";
import { As } from "@chakra-ui/react";

type Route = {
  name?: string;
  showInHeaderNav?: boolean;
  path: string;
  icon?: As;
  element: JSX.Element;
};

export const onlyHeaderLinks = (route: Route) => route.showInHeaderNav;
export const routes: Route[] = [
  {
    path: "/",
    name: "What we want?",
    icon: HiOutlinePuzzle,
    showInHeaderNav: true,
    element: <WhatWeWant />,
  },
  {
    name: "How bad is the air in limehouse?",
    path: "/how-bad-is-the-air-in-limehouse",
    icon: FaRegGrimace,
    showInHeaderNav: true,
    element: <HowBadIsTheAirInLimeHouse />,
  },
  {
    name: "Why limehouse needs GI?",
    path: "/why-limehouse-needs-green-infrastructure",
    icon: BiLeaf,
    showInHeaderNav: true,
    element: <WhyLimeHouseNeedsGreenInfrastructure />,
  },
  {
    name: "friendly projects",
    path: "/friendly-local-projects",
    icon: MdOutlineHandshake,
    showInHeaderNav: true,
    element: <FriendlyLocalProjects />,
  },
  {
    name: "subscribe",
    showInHeaderNav: true,
    path: "/subscribe",
    element: <Subscribe />
  }
];
