import { Checkbox, DatePicker } from "antd";
import { FormikErrors, FormikTouched } from "formik";
import moment from "moment";
import React from "react";
import styled from "styled-components";
import { ThemeType } from "@/utils/theme";
import Error from "./Error";

export const DATE_FORMAT = "YYYY-MM-DD";

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

type DateFieldType = {
  field: FieldType;
  form: MetaType;
  format?: string;
  border?: keyof typeof ThemeType.sizes;
  placeholder: string;
  background?: string;
  picker: string;
};

type StyledDateFieldType = {
  border: keyof typeof ThemeType.sizes;
  hasError: boolean;
  background: string;
};

const StyledDateField = styled.div<StyledDateFieldType>`
  .ant-picker {
    background: ${({ background }) => background};
    width: 100%;
    padding: 15px 15px;
    border: 1px solid #e1e1e1;
    border-radius: 12px;
    backdrop-filter: blur(40px);
    border-color: white;
  }
  /* .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    background: ${({ background }) => background};
    border: 1px solid #e1e1e1;
    border-radius: ${({ border, theme }) => `${theme.sizes[border]}px`};
    border-color: ${({ hasError }) => (hasError ? "red" : "white")};
  }
  .ant-select-single.ant-select-lg:not(.ant-select-customize-input)
    .ant-select-selector {
    height: 50px;
  }
  .ant-select-single.ant-select-lg:not(.ant-select-customize-input)
    .ant-select-selector
    .ant-select-selection-item {
    padding: 4px;
  }
  .ant-select-single.ant-select-show-arrow .ant-select-selection-item,
  .ant-select-single.ant-select-show-arrow .ant-select-selection-placeholder {
    padding: 4px;
  }
  .ant-select-single.ant-select-show-arrow .ant-select-selection-search {
    padding-top: 4px;
  }

  margin-bottom: ${({ theme }) => `${theme.sizes["sm"]}px`}; */
`;

const DatePickerField: React.FC<DateFieldType> = ({
  field: { name, value, onChange, onBlur },
  form: { errors, touched, setFieldValue },
  border = "md",
  placeholder = "",
  format,
  picker,
  background = "rgb(242, 242, 242, 1)",
}: DateFieldType) => {
  const handleChange = (date, dataString) => {
    console.log("teh value====", dataString);
    // console.log('the value====', value.format('MM'));
    // const formatValue = value.format('YYYY') + '/' + value.format('MM');
    // console.log(formatValue, 'deff');
    // setFieldValue(name, formatValue);
  };
  const hasError = errors && errors[name] && touched && touched[name];
  console.log("the moment value----", value);

  return (
    <StyledDateField
      border={border}
      placeholder={placeholder}
      hasError={hasError}
      background={background}
    >
      {/* <DatePicker
        value={value ? moment(value).format('MMM Do YY') : null}
        onChange={handleChange}
        format={DATE_FORMAT}
      /> */}
      <DatePicker
        onChange={handleChange}
        format={format}
        picker={picker}
        value={value ? moment(value).format("MMM Do YY") : null}
      />

      {hasError && <Error message={errors && errors[name]} />}
    </StyledDateField>
  );
};
export default DatePickerField;
