import React from "react";
import styled from "styled-components";

const StyledPlaceholder = styled.div`
  height: 300px;
  align-items: center;
  justify-content: center;
  display: flex;
  color: #8792a2;
`;

const NoResult = () => {
  return (
    <StyledPlaceholder>
      <span>No records found </span>
    </StyledPlaceholder>
  );
};

export default NoResult;
