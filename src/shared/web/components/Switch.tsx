import React from "react";
import styled from "styled-components";
import { Switch } from "antd";
import { generalColors } from "@/utils/theme";
import { FormikErrors, FormikTouched } from "formik";

type StyleSwitchWrapperType = {
  color: keyof typeof generalColors;
};

const StyleSwitchWrapper = styled.div<StyleSwitchWrapperType>`
  .ant-switch-checked {
    background-color: ${({ color, theme }) =>
      theme.colors.generalColors[color]};
  }
`;

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
  setFieldValue: Function;
};

type AppSwitchType = {
  field: FieldType;
  form: MetaType;
  checked?: boolean;
  color?: keyof typeof generalColors;
  size?: "small" | "default";
};

const AppSwitch = ({
  field: { name, value },
  form: { setFieldValue },
  color = "primary",
  size = "default",
}: AppSwitchType) => {
  const handleSwitchChange = (checked: boolean) => {
    setFieldValue(name, checked);
  };
  return (
    <StyleSwitchWrapper color={color}>
      <Switch onChange={handleSwitchChange} checked={value} size={size} />
    </StyleSwitchWrapper>
  );
};

export default AppSwitch;
