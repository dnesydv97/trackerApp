import React from "react";
import styled from "styled-components";
import { Typography } from "antd";
const StyledContainer = styled.div<{ style?: any }>`
  margin: 20px 0;
`;

const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px 0;
`;
const Label = styled.span`
  width: 160px;
  color: #b0b0b0;
  font-weight: 600;
`;
const Value = styled.span``;

type TableListParams = {
  data: { label: string; value: string | React.ReactNode }[];
  title?: string;
  style?: any;
};
const TableList: React.FC<TableListParams> = ({ data, title, style }) => {
  return (
    <StyledContainer style={style}>
      {!!title && <Typography.Title level={5}>{title}</Typography.Title>}
      {data.map((item) => (
        <ListItem key={item.label}>
          <Label>{item.label}</Label>
          {React.isValidElement(item.value) ? (
            item.value
          ) : (
            <Value>{item.value}</Value>
          )}
        </ListItem>
      ))}
    </StyledContainer>
  );
};

export default TableList;
