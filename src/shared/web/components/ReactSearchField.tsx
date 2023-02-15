import { Typography } from "antd";
import { FormikErrors, FormikTouched } from "formik";
import React from "react";
import Select from "react-select";
import styled from "styled-components";
import { ThemeType } from "@/utils/theme";
import Error from "./Error";

type StyledInputFieldType = {
  border: keyof typeof ThemeType.sizes;
  hasError?: boolean;
  background?: string;
};

type FieldType = {
  name: string;
  value: any;
  onChange: (e: React.ChangeEvent<any>) => void;
  onBlur: (e: React.FocusEvent<any>) => void;
  [rest: string]: any;
};

type MetaType = {
  errors?: FormikErrors<object> | undefined;
  touched?: FormikTouched<object> | undefined;
  submitCount: number;
};

type InputFieldType = {
  field: FieldType;
  form: MetaType;
  border?: keyof typeof ThemeType.sizes;
  type?: string;
  placeholder?: string;
  label?: string;
  background?: string;
  options?: { label: string; value: string }[];
  onSelectOption?: (value: string) => void;
  style?: any;
  isSearchable?: boolean;
  setFieldValue?: any;
};

const Container = styled.div`
  margin-bottom: 8px;
  position: relative;
`;

const Content = styled.div<Partial<StyledInputFieldType>>`
  position: relative;
  width: 100%;
  font-family: inherit;

  .react-select__control--is-focused {
    &,
    &:hover,
    &:active,
    &:focus-visible,
    &:focus-within {
      border: 1px solid
        ${({ theme, hasError }) => (hasError ? "red" : theme.colors.primary)} !important;
      box-shadow: none !important;
      outline: none;
    }
  }
  .react-select__control {
    outline: none;
    width: 100%;
    border: none;
    background-color: #fafafa !important;
    margin-top: 4px;
    height: 40px;
    border-radius: 2px !important;
    border: 1px solid ${({ theme, hasError }) => (hasError ? "red" : "#f0f0f0")} !important;
  }
  .react-select__menu {
    border-top-left-radius: 0px !important;
    border-top-right-radius: 0px !important;
    border-bottom-left-radius: 2px !important;
    border-bottom-right-radius: 2px !important;
    margin-top: -2px;
    margin-left: 0px;
    outline: none;
    box-shadow: none;
    background-color: #fafafa !important;
    border: 1px solid ${({ theme }) => theme.colors.primary} !important;
  }
`;

const Label = styled(Typography.Text)`
  pointer-events: none;
  margin: 0;
  padding: 0;
  padding: 0px 2px;
`;

const ReactSearchField: React.FC<InputFieldType> = ({
  field: { name, value, onChange, onBlur, disabled },
  form: { errors, touched, submitCount },
  border = "sm",
  placeholder,
  label,
  type = "text",
  background = "#F0F2F5",
  style,
  options,
  isSearchable = false,
  setFieldValue,
  ...inputProps
}) => {
  const hasError = errors?.[name] && (touched?.[name] || !!submitCount);

  return (
    //@ts-ignore
    <Container style={style}>
      {!!label && <Label>{label}</Label>}
      <Content background={background} hasError={hasError}>
        <Select
          placeholder={placeholder || "Select"}
          value={options?.find((item) => item.value === value)}
          options={options}
          classNamePrefix="react-select"
          className="react-select-container"
          isSearchable={isSearchable}
          onChange={(option) => {
            // setFieldValue(name, option.value);
            setFieldValue(name, option?.value);
          }}
        />
      </Content>

      {hasError && <Error message={errors && errors[name]} />}
    </Container>
  );
};

export default ReactSearchField;
