import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Field, Form, Formik } from "formik";
import useAPI from "@/hooks/api";
import React from "react";
import styled from "styled-components";
import { devices } from "@/utils/theme";
import Button from "./Button";
import InputField, { StyledInputField } from "./InputField";
import { Input } from "antd";

const FormFieldStyle = styled(Field)`
  width: 100%;
  max-width: 500px;
`;
interface AutoSearchType {
  placeholder: string;
  name: string;
  handleChange: DebouncedFunc<(event: any) => void>;
  handleSubmit?: () => void;
}
const AutoSearch = ({
  placeholder,
  name,
  handleChange,
  handleSubmit,
}: AutoSearchType) => {
  console.log("handlechange====", handleChange);
  return (
    <Formik initialValues={{}} onSubmit={handleSubmit}>
      {({
        handleSubmit,
        isSubmitting,
        handleBlur,
        errors,
        touched,
        values,
        setFieldValue,
      }) => {
        return (
          <Form
            onSubmit={handleSubmit || null}
            onChange={handleChange}
            style={{}}
          >
            <FormFieldStyle
              component={Input}
              placeholder={placeholder}
              name={name}
              suffix={<FontAwesomeIcon icon="magnifying-glass" />}
            />
          </Form>
        );
      }}
    </Formik>
  );
};

export default AutoSearch;
