import React from 'react';
import styled from 'styled-components';

const StyledError = styled.div<{ isFormError }>`
  color: red;
  font-size: 12px;
  margin-top: 2px;

  font-size: ${({ isFormError }) => (isFormError ? 14 : 12)}px;
  ${({ isFormError }) =>
    isFormError &&
    `text-align: center;
    width: 100%;
    margin: 10px;
  `};
`;

type ErrorType = {
  message: any;
  isFormError?: boolean;
};
const Error: React.FC<ErrorType> = ({ message, isFormError = false }) => {
  if (!message) return null;
  return <StyledError isFormError={isFormError}>{message} </StyledError>;
};

export default Error;
