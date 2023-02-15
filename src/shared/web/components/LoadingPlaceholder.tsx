import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledPlaceholder = styled.div`
  height: 300px;
  align-items: center;
  justify-content: center;
  display: flex;
  color: #8792a2;
`;

const LoadingPlaceholder = () => {
  return (
    <StyledPlaceholder>
      <FontAwesomeIcon icon="circle-notch" spin size="2x" />
    </StyledPlaceholder>
  );
};

export default LoadingPlaceholder;
