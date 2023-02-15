import { Select, Typography } from "antd";
import React from "react";
import styled from "styled-components";

const { Option } = Select;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 5px;
`;

type SelectProps = {
  data: string[];
  defaultValue?: string;
  onChange: (val: string) => void;
  width?: number;
  label?: string;
};

const SelectFiled: React.FC<SelectProps> = ({
  options,
  data,
  defaultValue,
  onChange,
  width = 100,
  label,
}) => {
  return (
    <Container>
      {!!label && <Typography.Text>{label}</Typography.Text>}
      <Select
        defaultValue={defaultValue || options?.[0].label}
        style={{ width }}
        onChange={onChange}
      >
        {options?.map((item) => (
          <Option key={item.label} value={item.value}>
            {item.label}
          </Option>
        ))}
      </Select>
    </Container>
  );
};

export default SelectFiled;
