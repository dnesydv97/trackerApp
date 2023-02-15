import { Typography } from "antd";
import { FormikErrors, FormikTouched } from "formik";
import React from "react";
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
  prepend?: any;
  append?: any;
};

const Container = styled.div`
  margin-bottom: 8px;
  position: relative;
`;

const Content = styled.div<Partial<StyledInputFieldType>>`
  position: relative;
  width: 100%;
  font-family: inherit;
  display: flex;
  flex-direction: row;
  align-items: center;

  /* border-color: white; */
  /* background-color: #fafafa; */
  /* background: ${({ background }) => background}; */
`;

export const StyledInputField = styled.input<StyledInputFieldType>`
  outline: none;
  height: 100%;
  flex: 1;
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

const InputField: React.FC<InputFieldType> = ({
  field: { name, value, onChange, onBlur, disabled },
  form: { errors, touched, submitCount },
  border = "sm",
  placeholder,
  label,
  type = "text",
  background = "#F0F2F5",
  style,
  prepend,
  append,
  ...inputProps
}) => {
  console.log("submit count====", submitCount);
  console.log("the label========", label);
  const hasError = errors?.[name] && (touched?.[name] || !!submitCount);

  return (
    //@ts-ignore
    <Container style={style}>
      {!!label && <Label>{label}</Label>}
      <Content background={background} hasError={hasError}>
        {!!prepend && (
          <Typography.Text style={{ marginRight: 20 }}>
            {prepend}
          </Typography.Text>
        )}
        <StyledInputField
          border={border}
          placeholder={placeholder}
          name={name}
          type={type}
          onChange={onChange}
          onBlur={onBlur}
          hasError={hasError}
          background={background}
          value={value}
          disabled={disabled}
          {...inputProps}
        />
        {!!append && (
          <Typography.Text style={{ marginLeft: 20 }}>{append}</Typography.Text>
        )}
      </Content>

      {hasError && <Error message={errors && errors[name]} />}
    </Container>
  );
};

export default InputField;
