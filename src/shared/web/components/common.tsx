import React from "react";
import styled, { css } from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { fontColors, generalColors, heading, sizes, text } from "@/utils/theme";

export const FormItem = styled.div`
  margin-top: 10px;
`;

type StyledFlexType = {
  justifyContent: string;
  alignItems?: string;
};
export const StyledFlex = styled.div<StyledFlexType>`
  display: flex;

  ${({ justifyContent }) =>
    justifyContent &&
    css`
      justify-content: ${() => justifyContent};
    `}

  ${({ alignItems }) =>
    alignItems &&
    css`
      align-items: ${() => alignItems};
    `}
`;

type FlexType = {
  justifyContent?: string;
  alignItems?: string;
  children: React.ReactNode | React.ReactNode[];
};

export const Flex: React.FC<FlexType> = ({
  justifyContent = "",
  alignItems = "",
  children,
}: FlexType) => {
  return (
    <StyledFlex justifyContent={justifyContent} alignItems={alignItems}>
      {children}
    </StyledFlex>
  );
};

type StyledLinkType = {
  color: keyof typeof generalColors;
};
export const StyledLink = styled(RouterLink)<StyledLinkType>`
  font-family: Poppins;
  text-decoration: none;
  color: ${({ color, theme }) => theme.colors.generalColors[color]};
`;

type LinkType = {
  color?: keyof typeof generalColors;
  children: any;
  to: string;
};

export const Link: React.FC<LinkType> = ({
  color = "primary",
  children,
  to,
}: LinkType) => {
  return (
    <StyledLink to={to} color={color}>
      {children}
    </StyledLink>
  );
};

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
`;

export const Col = styled.div`
  padding-left: 15px;
  padding-right: 15px;
`;

export const Col6 = styled(Col)`
  flex: 0 0 50%;
  max-width: 50%;
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  vertical-align: middle;
`;

type StyledTitleType = {
  color: keyof typeof fontColors;
};
export const StyledTitle = styled.div<StyledTitleType>`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  line-height: 36px;
  color: ${({ color, theme }) => theme.colors.fontColors[color]};
`;

type TitleType = {
  color?: keyof typeof fontColors;
  children: string;
};

export const Title: React.FC<TitleType> = ({
  color = "primary",
  children,
}: TitleType) => {
  return <StyledTitle color={color}>{children}</StyledTitle>;
};

type StyledVerticalSpacingType = {
  spacing: keyof typeof sizes;
};
export const StyledVerticalSpacing = styled.div<StyledVerticalSpacingType>`
  margin-top: ${({ spacing, theme }) => `${theme.sizes[spacing]}px`};
`;

type VerticalSpacingType = {
  spacing?: keyof typeof sizes;
  children: React.ReactNode;
};
export const VerticalSpacing: React.FC<VerticalSpacingType> = ({
  spacing = "lg",
  children,
}: VerticalSpacingType) => {
  return (
    <StyledVerticalSpacing spacing={spacing}>{children}</StyledVerticalSpacing>
  );
};

type StyledHeaderType = {
  heading: keyof typeof heading;
  color: keyof typeof fontColors;
  ml: keyof typeof sizes | undefined;
  mr: keyof typeof sizes | undefined;
};

export const StyledHeader = styled.div<StyledHeaderType>`
  /* font-size: ${({ heading, theme }) =>
    `${theme.heading[heading].fontSize}px`}; */
  margin-bottom: 20px;
  line-height: ${({ heading, theme }) =>
    `${theme.heading[heading].lineHeight}px`};
  font-weight: 500;
  ${({ heading, theme }) =>
    theme.heading[heading].letterSpacing &&
    css`
      letter-spacing: ${({ theme }) =>
        `${theme.heading[heading].letterSpacing}px`};
    `};

  ${({ heading, theme }) =>
    theme.heading[heading].fontWeight &&
    css`
      letter-spacing: ${({ theme }) => `${theme.heading[heading].fontWeight}`};
    `};
  color: ${({ color, theme }) => theme.colors.fontColors[color]};

  ${({ ml }) =>
    ml &&
    css`
      margin-left: ${({ theme }) => `${theme.sizes[ml]}px`};
    `};

  ${({ mr }) =>
    mr &&
    css`
      margin-right: ${({ theme }) => `${theme.sizes[mr]}px`};
    `};
`;

type Headertype = {
  heading?: keyof typeof heading;
  children: React.ReactNode | string;
  color?: keyof typeof fontColors;
  ml?: keyof typeof sizes | undefined;
  mr?: keyof typeof sizes | undefined;
};
export const Header: React.FC<Headertype> = ({
  heading = "h5",
  color = "primary",
  children,
  ml,
  mr,
}: Headertype) => {
  return (
    <StyledHeader ml={ml} mr={mr} color={color} heading={heading}>
      {children}
    </StyledHeader>
  );
};

type StyledTextType = {
  text: keyof typeof text;
  color: keyof typeof fontColors;
  ml: keyof typeof sizes | undefined;
  mr: keyof typeof sizes | undefined;
};

export const StyledText = styled.div<StyledTextType>`
  /* font-size: ${({ text, theme }) => `${theme.text[text].fontSize}px`}; */
  line-height: ${({ text, theme }) => `${theme.text[text].lineHeight}px`};
  font-weight: ${({ text, theme }) => `${theme.text[text].fontWeight}`};
  ${({ text, theme }) =>
    theme.text[text].letterSpacing &&
    css`
      letter-spacing: ${({ theme }) => `${theme.text[text].letterSpacing}px`};
    `};

  ${({ text, theme }) =>
    theme.text[text].fontWeight &&
    css`
      letter-spacing: ${({ theme }) => `${theme.text[text].fontWeight}`};
    `};
  color: ${({ color, theme }) => theme.colors.fontColors[color]};

  ${({ ml }) =>
    ml &&
    css`
      margin-left: ${({ theme }) => `${theme.sizes[ml]}px`};
    `};

  ${({ mr }) =>
    mr &&
    css`
      margin-right: ${({ theme }) => `${theme.sizes[mr]}px`};
    `};
`;

type TextType = {
  text?: keyof typeof text;
  color?: keyof typeof fontColors;
  ml?: keyof typeof sizes | undefined;
  mr?: keyof typeof sizes | undefined;
  children: React.ReactElement | string;
};
export const Text: React.FC<TextType> = ({
  text = "b1",
  color = "primary",
  children,
  mr,
  ml,
}: TextType) => {
  return (
    <StyledText text={text} color={color} mr={mr} ml={ml}>
      {children}
    </StyledText>
  );
};
