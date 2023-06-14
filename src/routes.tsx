// pages
import {
  HowBadIsTheAirInLimeHouse,
  FriendlyLocalProjects,
  WhatWeWant,
  WhyLimeHouseNeedsGreenInfrastructure,
  THCouncil,
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
    name: "About us",
    icon: HiOutlinePuzzle,
    showInHeaderNav: true,
    element: <WhatWeWant />,
  },
  {
    name: "Air in Limehouse",
    path: "/how-bad-is-the-air-in-limehouse",
    icon: FaRegGrimace,
    showInHeaderNav: true,
    element: <HowBadIsTheAirInLimeHouse />,
  },
  {
    name: "Green Infrastructure",
    path: "/why-limehouse-needs-green-infrastructure",
    icon: BiLeaf,
    showInHeaderNav: true,
    element: <WhyLimeHouseNeedsGreenInfrastructure />,
  },
  {
    name: "Local projects",
    path: "/friendly-local-projects",
    icon: MdOutlineHandshake,
    showInHeaderNav: true,
    element: <FriendlyLocalProjects />,
  },
  {
    name: "TH Council",
    path: "/tower-hamlets-council",
    icon: MdOutlineHandshake,
    showInHeaderNav: true,
    element: <THCouncil />,
  },
  {
    name: "Subscribe",
    showInHeaderNav: true,
    path: "/subscribe",
    element: <Subscribe />
  }
];
