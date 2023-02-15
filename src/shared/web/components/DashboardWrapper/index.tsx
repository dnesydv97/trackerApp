import Leftbar from "@/components/Leftbar";
import React from "react";
import menus from "./leftMenu";

import styled from "styled-components";

import { useRoot } from "@/RootProvider";
import { Outlet } from "react-router-dom";
import { devices } from "@/utils/theme";

import { useMediaQuery } from "react-responsive";
const Container = styled.div`
  @media ${devices.tablet} {
    margin-left: 220px;
  }
`;

const LandLord = () => {
  const { auth: user } = useRoot();

  const isDesktopOrLaptop = useMediaQuery({ query: devices.tablet });

  return (
    <>
      {isDesktopOrLaptop ? <Leftbar list={menus(user?.role)} /> : ""}

      {/*@ts-ignore*/}

      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default LandLord;
