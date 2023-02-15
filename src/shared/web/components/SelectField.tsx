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
        defaultValue={defaultValue || data?.[0]}
        style={{ width }}
        onChange={onChange}
      >
        {data?.map((item) => (
          <Option key={item} value={item}>
            {item}
          </Option>
        ))}
      </Select>
    </Container>
  );
};

export default SelectFiled;
