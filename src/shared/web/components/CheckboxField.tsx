import React from "react";
import styled from "styled-components";
import { ThemeType } from "@/utils/theme";

type StyledCheckboxFieldType = {
  border: keyof typeof ThemeType.sizes;
};

type CheckboxFieldType = {
  border?: keyof typeof ThemeType.sizes;
  label: string;
};

const StyledCheckboxLabel = styled.span`
  font-family: ${({ theme }) => theme.fontFamily};
  color: ${({ theme }) => theme.colors.fontColors.primary};
  mix-blend-mode: normal;
`;

const StyledCheckboxField = styled.input.attrs(() => ({
  type: "checkbox",
}))<StyledCheckboxFieldType>`
  background: ${({ theme }) => theme.colors.secondary};
  border: ${({ theme }) => `1px solid ${theme.colors.secondary}`};
  border-radius: ${({ border, theme }) => `${theme.sizes[border]}px`};
`;
const CheckboxField = ({ border = "sm", label }: CheckboxFieldType) => {
  return (
    <StyledCheckboxLabel>
      {" "}
      <StyledCheckboxField border={border} /> Remember
    </StyledCheckboxLabel>
  );
};

export default CheckboxField;
