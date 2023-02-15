import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Field, Form, Formik } from "formik";
import useAPI from "@/hooks/api";
import React from "react";
import styled from "styled-components";
import { devices } from "@/utils/theme";
import Button from "./Button";
import InputField, { StyledInputField } from "./InputField";

const FormFieldStyle = styled(Field)`
  width: 250px;
  @media (${devices.tablet}) {
    width: 300px;
  }
`;
const SearchField: React.FC<SearchFieldPropsTypes> = ({
  placeholder,
  name,
  handleRequest,
  setParams,
  params,
}) => {
  const [handleSubmitRequest, { loading, error }] = useAPI();
  const handleSubmit = async (values, formikHelpers) => {
    console.log("the values======", values);
    handleRequest();
  };

  const handleChange = (e) => {
    console.log("the change values======", e.target.value);
    setParams({ ...params, address: e.target.value, page: 0 });
    //Api to be called at each key strokes.
  };
  // need to do handleChange also
  return (
    <Formik initialValues={{}} onSubmit={handleSubmit}>
      {({
        handleSubmit,
        isSubmitting,
        handleBlur,
        errors,
        touched,
        values,
      }) => {
        console.log("the values====", values);
        return (
          <Form
            onSubmit={handleSubmit}
            onChange={handleChange}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "baseline",
            }}
          >
            {/* <Typography.Title level={5}>Forgot Password?</Typography.Title> */}
            <FormFieldStyle
              component={InputField}
              placeholder={placeholder}
              name={name}
              onBlur={handleBlur}
              icon={<FontAwesomeIcon icon="magnifying-glass" />}
            />
            {/* <Error message={error} isFormError /> */}
            <Button
              size="large"
              block={true}
              backgroundColor="primary"
              htmlType="submit"
              disabled={loading || isSubmitting}
              loading={loading || isSubmitting}
              icon={<FontAwesomeIcon icon="magnifying-glass" />}
            ></Button>

            {/* <Row
                  style={{
                    marginTop: 20,
                  }}
                >
                  <Link to="/login">Back to login</Link>
                </Row> */}
          </Form>
        );
      }}
    </Formik>
  );
};

export default SearchField;
interface SearchFieldPropsTypes {
  placeholder: string;
  name: string;
  handleRequest: () => void;
  setParams: () => void;
  params: object;
}
