import { Select, Typography } from "antd";
import { FormikErrors, FormikTouched } from "formik";
import React from "react";
import styled from "styled-components";
import Error from "./Error";

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

const ContractSelect: React.FC<VerticalRadioPropsTypes> = ({
  field: { name, value, onBlur, disabled },
  form: { errors, touched, setFieldValue },
  label,
  dropdown,
  onSelect,

  // data,
  // defaultValue,
  // onChange,
  // width = 100,
  // label,
}) => {
  console.log("the items====", dropdown);
  console.log("name====", name);
  const handleOnChange = (value: any) => {
    setFieldValue(name, value);
    onSelect(value);
  };
  const hasError = errors?.[name];
  return (
    <Container>
      {!!label && <Typography.Text>{label}</Typography.Text>}
      <Select
        // defaultValue={defaultValue || data?.[0]}
        value={value}
        style={{ width: "200px" }}
        onChange={handleOnChange}
      >
        {dropdown?.map((item) => (
          <Option key={item.label} value={item.value}>
            {item.label}
          </Option>
        ))}
      </Select>
      {hasError && <Error message={errors && errors[name]} />}
    </Container>
  );
};

export default ContractSelect;

interface VerticalRadioPropsTypes {
  label?: string;
  field: FieldType;
  form: MetaType;
  question?: string;
  onSelect?: any;
  dropdown: optionTypes[];
}
type MetaType = {
  errors?: FormikErrors<object> | undefined;
  touched?: FormikTouched<object> | undefined;
  setFieldValue: Function;
};

type FieldType = {
  name?: string;
  value: any;
  onChange: (e: React.ChangeEvent<any>) => void;
  onBlur: (e: React.FocusEvent<any>) => void;
  [rest: string]: any;
};
interface optionTypes {
  label: string;
  value: string;
}
