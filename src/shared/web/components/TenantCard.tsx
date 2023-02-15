import SwitchTabs from "../designSytem/tabs";
import React from "react";
import SearchField from "../designSytem/searchField";
import Styled from "styled-components";
import { DisplayFlexColumn } from "../common/style";

const StyledSearchField = Styled(SearchField)`
width: 300px !important;


`;
const Container = Styled.div`
 max-width: 900px;
`;

const TenantCard = () => {
  return (
    <Container>
      <h3>My tenant</h3>
      <>
        <StyledSearchField border={80} colors="red" />
        <SwitchTabs />
      </>
    </Container>
  );
};

export default TenantCard;
