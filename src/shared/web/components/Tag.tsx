import React from "react";
import styled from "styled-components";
import { capitalize } from "lodash";
export const TagWrapper = styled.div<{ type: string }>`
  color: ${({ type, theme }) => theme.colors.statusColors[type]?.text};
  background-color: ${({ type, theme }) => theme.colors.statusColors[type]?.bg};
  text-align: center;
  border-radius: 500px;
  margin: 2px 4px;
  display: inline-flex;
  align-items: center;
  padding: 2px 10px;
  justify-content: center;
`;
const Text = styled.span`
  font-weight: 600;
  font-size: 10px;
`;

const Tag = ({ type, style = {} }: { type: string; style?: any }) => {
  if (type === "service") {
    type = "Service Provider";
  }
  return (
    <TagWrapper type={capitalize(type)} style={style}>
      <Text>{capitalize(type)}</Text>
    </TagWrapper>
  );
};

export default Tag;
