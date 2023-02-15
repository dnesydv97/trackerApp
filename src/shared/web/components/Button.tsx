import { Button, ButtonProps } from "antd";
import React from "react";
import styled from "styled-components";
import { generalColors, ThemeType } from "@/utils/theme";

type StyledButtonType = {
  backgroundColor: keyof typeof generalColors;
  border: keyof typeof ThemeType.sizes;
  spacing: keyof typeof ThemeType.sizes;
  textColor: keyof typeof generalColors;
};

interface AppButtonType extends ButtonProps {
  title?: string;
  backgroundColor?: keyof typeof generalColors;
  border?: keyof typeof ThemeType.sizes;
  spacing?: keyof typeof ThemeType.sizes;
  block?: boolean;
  textColor?: keyof typeof generalColors;
  size?: "small" | "middle" | "large";
}

const StyledButton = styled(Button)<StyledButtonType>`
  &,
  :active,
  :focus {
    ${({ backgroundColor, textColor, theme }) =>
      backgroundColor &&
      `
    background-color: ${theme.colors.generalColors[backgroundColor]}!important;
    color: ${theme.colors.generalColors[textColor]} !important;
    `}

    border-radius: 2px;
    border: 1px solid #ddd;
    outline: none;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.15);
    /* width: 100%; */
    margin: 15px 0;
    cursor: pointer;
  }
`;

const AppButton = ({
  border = "xxs",
  spacing = "sm",
  block = false,
  textColor = "white",
  size = "middle",
  ...props
}: AppButtonType) => {
  return (
    //@ts-ignore
    <StyledButton
      border={border}
      spacing={spacing}
      textColor={textColor}
      size={size}
      // block={block}
      {...props}
    ></StyledButton>
  );
};

export default AppButton;
