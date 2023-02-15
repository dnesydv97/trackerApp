import React from "react";
import { Input as InputField } from "antd";
import { Select } from "antd";
import { FieldInputProps, FormikProps } from "formik";
// import Error from "./error";

const Input: React.FC<InputProps> = ({
  field: { name, value, onChange, onBlur, disabled },
  form: { errors, touched, submitCount, values, setFieldValue },
  label,
  placeholder,
  width = 200,
  options,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue(name, e);
  };
  return (
    <div>
      <Select
        style={{ width }}
        onChange={handleChange}
        value={value}
        options={options}
      >
        {options?.map((item) => (
          <Option key={item.label} name={name} value={item.value}>
            {item.label}
          </Option>
        ))}
      </Select>
      {/* <InputField
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      /> */}
      {/* {hasError && <Error message={errors && errors[name]} />} */}
    </div>
  );
};

export default Input;

interface InputProps {
  field: any;
  form: any;
  label: string;
  placeholder: string;
  width: any;
  options: any;
}
