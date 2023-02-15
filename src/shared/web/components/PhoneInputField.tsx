import { Typography } from "antd";
import { FormikErrors, FormikTouched } from "formik";
import React from "react";
import PhoneInput from "react-phone-input-2";
import styled, { css } from "styled-components";
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
  setFieldValue?: any;
};

const Container = styled.div`
  margin: 10px 0px;
  position: relative;
`;

const Content = styled.div<Partial<StyledInputFieldType>>`
  position: relative;
  width: 100%;
  font-family: inherit;

  input {
    outline: none !important;
    height: 100% !important;
    width: 100% !important;
    border: none !important;
    background-color: #fafafa !important;
    margin-top: 4px !important;

    height: 40px !important;
    border-radius: 2px !important;
    border: 1px solid #f0f0f0 !important;
    &:focus {
      border: 1px solid ${({ theme }) => theme.colors.primary} !important;
    }

    ${({ hasError }) =>
      hasError &&
      css`
        border-color: red !important;
      `}
  }

  /* border-color: white; */
  /* background-color: #fafafa; */
  /* background: ${({ background }) => background}; */
`;

export const StyledInputField = styled.input<StyledInputFieldType>`
  outline: none;
  height: 100%;
  width: 100%;
  border: none;
  background-color: #fafafa;
  margin-top: 4px;
  padding: 10px 15px;
  height: 40px;
  border-radius: 2px;
  border: 1px solid #f0f0f0;
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }

  ${({ hasError }) =>
    hasError &&
    css`
      border-color: red;
    `}
`;

const Label = styled(Typography.Text)`
  pointer-events: none;
  margin: 0;
  padding: 0;
  padding: 0px 2px;
`;

const PhoneInputField: React.FC<InputFieldType> = ({
  field: { name, value, onChange, onBlur, disabled },
  form: { errors, touched, submitCount },
  border = "sm",
  placeholder,
  label,
  type = "text",
  background = "#F0F2F5",
  style,
  setFieldValue,
  ...inputProps
}) => {
  const hasError = errors?.[name] && (touched?.[name] || !!submitCount);

  return (
    //@ts-ignore
    <Container style={style}>
      {!!label && <Label>{label}</Label>}
      <Content background={background} hasError={hasError}>
        <PhoneInput
          country={"ie"}
          preferredCountries={["ie"]}
          value={value}
          onChange={(phone) => setFieldValue(name, phone)}
          inputClass="phone-input"
        />
      </Content>

      {hasError && <Error message={errors && errors[name]} />}
    </Container>
  );
};

export default PhoneInputField;
