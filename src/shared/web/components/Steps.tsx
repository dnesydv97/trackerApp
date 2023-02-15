import React from "react";

import styled from "styled-components";

import { Typography } from "antd";

const Steps = styled.div<{
  horizontal?: boolean;
}>`
  ${({ horizontal }) =>
    horizontal
      ? `

 display: inline-flex;
 flex-direction: row;
 align-items: center;
 justify-content: center;
 margin-bottom: 40px;
 position: relative;

`
      : `
      display: inline-flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      margin-bottom: 40px;
      position: relative;`};
`;
const StepCircle = styled.div<{ active: boolean }>`
  height: 50px;
  width: 50px;
  border-radius: 50px;
  margin: 10px 20px;
  background-color: ${({ active, theme }) =>
    active ? theme.colors.primary : "white"};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  h4 {
    color: ${({ active, theme }) => (active ? "white" : "black")};
  }
`;

const StepLineHorizontal = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.primary};
  position: absolute;
  top: 35px;
  left: 40px;
  right: 40px;
  z-index: 1;
`;

const StepLineVertical = styled.div`
  width: 1px;
  background-color: ${({ theme }) => theme.colors.primary};
  position: absolute;
  top: 40px;
  bottom: 40px;
  left: 45px;
  z-index: 1;
`;
const Step = styled.div<{
  horizontal?: boolean;
}>`
  z-index: 9;
  ${({ horizontal }) =>
    horizontal
      ? `
  
   display: inline-flex;
   flex-direction: row;
  `
      : `
        display: flex;
        flex-direction: row;
        `};
`;

const Content = styled.div<{
  horizontal?: boolean;
}>`
  z-index: 9;
  flex-wrap: wrap;
  ${({ horizontal }) =>
    horizontal
      ? `
    
    
    `
      : `
          padding-top: 10px;
          
          `};
`;

type StepTypes = {
  steps: { title: string; subTitle: string }[];
  activeStep: number;
  horizontal?: boolean;
};

const StepComp: React.FC<StepTypes> = ({
  steps,
  activeStep,
  horizontal = false,
}) => {
  return (
    <Steps horizontal={horizontal}>
      {Array.isArray(steps) &&
        steps.map((stepItem, index) => (
          <Step key={stepItem.title} horizontal={horizontal}>
            <div>
              <StepCircle active={activeStep === index}>
                <Typography.Title level={4} style={{ marginBottom: 0 }}>
                  {index + 1}
                </Typography.Title>
              </StepCircle>
            </div>
            <Content>
              <Typography.Text style={{ display: "block" }}>
                {stepItem.title}
              </Typography.Text>
              <Typography.Text type="secondary">
                {stepItem.subTitle}
              </Typography.Text>
            </Content>
          </Step>
        ))}
      {horizontal ? <StepLineHorizontal /> : <StepLineVertical />}
    </Steps>
  );
};

export default StepComp;
