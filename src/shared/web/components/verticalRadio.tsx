import { Radio, RadioChangeEvent, Space } from "antd";
import { FormikErrors, FormikTouched } from "formik";
import React from "react";
import styled from "styled-components";
import Error from "./Error";

const VerticalRadioWrapperStyle = styled.div``;

const RadioItemStyle = styled.div`
  min-width: 200px;
`;

const VerticalRadio = ({
  label,
  field: { name, value, ...fieldProps },
  form: { setFieldValue, touched, errors },
  question,
  options,
  onClick,
  ...props
}: VerticalRadioPropsTypes) => {
  console.log("the values======", props);
  const onChange = (e: RadioChangeEvent) => {
    setFieldValue(name, e.target.value);
  };
  const hasError = errors?.[name];
  console.log("the lables======", label);
  return (
    <VerticalRadioWrapperStyle>
      <Radio.Group onChange={onChange} value={value} buttonStyle="solid">
        <Space direction="vertical">
          {options.map((item: any, index) => {
            return (
              <RadioItemStyle>
                <Radio.Button
                  style={{ width: "100%", textAlign: "center" }}
                  value={item}
                  key={index}
                  onClick={() => {
                    onClick(item);
                  }}
                >
                  {item}
                </Radio.Button>
              </RadioItemStyle>
            );
          })}
        </Space>
      </Radio.Group>
      {hasError && <Error message={errors && errors[name]} />}
    </VerticalRadioWrapperStyle>
  );
};

export default VerticalRadio;

interface VerticalRadioPropsTypes {
  label?: string;
  field: FieldType;
  form: MetaType;
  question?: string;
  options: optionTypes[];
  onClick: (value) => void;
}
type MetaType = {
  errors?: FormikErrors<object> | undefined;
  touched?: FormikTouched<object> | undefined;
  setFieldValue: Function;
};

type FieldType = {
  name: string;
  value: any;
  onChange: (e: React.ChangeEvent<any>) => void;
  onBlur: (e: React.FocusEvent<any>) => void;
  [rest: string]: any;
};
interface optionTypes {
  label: string;
  value: string;
}
