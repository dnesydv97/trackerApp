import { Button, DatePicker, Row } from "antd";
import { Field, Formik } from "formik";
import useAPI from "@/hooks/api";
import _ from "lodash";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRoot } from "@/RootProvider";
import styled from "styled-components";
import * as yup from "yup";
import AppButton from "./Button";
import DatePickerField from "./DatePicker";
import Error from "./Error";
import FileUploader from "./FileUploader";

const AddFormik = ({
  modelCategory,
  setModalOpen,
  isAddOrEdit,
  setIsAddEdit,
  setModelCategory,
  userBio,
  setUserBio,
  isModalOpen,
}) => {
  console.log("isaddoredit========", modelCategory);
  console.log("yup date errors=====", yup.date());
  const { id: userId } = useParams();
  const { auth, checkAuth } = useRoot();
  const [isChangeProfileVisible, setChangeProfileVisible] = useState(false);
  const [landLordState, setLandLordState] = useState({
    landLordName: "",
    landLordEmail: "",
    propertyAddress: "",
    rentalStartingDate: "",
    rentalEndingDate: "",
  });
  const [educationalHistory, setEducationalHistory] = useState({
    school: "",
    degree: "",
    fieldOfStudy: "",
    educationStartDate: "",
    educationEndDate: "",
  });
  const [
    handleSubmitRequest,
    { data: responseData, loading: changeRequestLoading },
  ] = useAPI();
  const [getProfileRequest, { loading, data: profile, error }] = useAPI();

  const getProfile = async () => {
    const res = await getProfileRequest({
      method: "get",
      url: `v1/auth/profile/${userId || auth?.id}`,
    });
    console.log("the profile res===", res);
    setUserBio(res?.user);
  };

  const handleRequest = (data, url) => {
    handleSubmitRequest({
      method: "post",
      url: url,
      data: data,
    });
  };

  // useEffect(() => {
  //   getProfile();
  // }, []);

  const handleSubmit = async (values, { resetForm }) => {
    console.log("this is calling");
    console.log("the values=====", values);
    const {
      landlordName,
      landlordEmail,
      propertyAddress,
      rentalStartingDate,
      rentalEndingDate,
      school,
      degree,
      fieldOfStudy,
      educationStartDate,
      educationEndDate,
    } = values;

    if (
      landlordName !== "" &&
      landlordEmail !== "" &&
      propertyAddress !== "" &&
      rentalEndingDate !== "" &&
      rentalStartingDate == ""
    ) {
      const url = "v1/auth/rentalHistories";
      handleRequest(
        {
          landlordName,
          landlordEmail,
          propertyAddress,
          startMonth: rentalStartingDate,
          endMonth: rentalEndingDate,
        },
        url
      );
    } else {
      const url = "v1/auth/educationHistories";
      handleRequest(
        {
          school,
          degree,
          fieldOfStudy,
          startMonth: educationStartDate,
          endMonth: educationEndDate,
        },
        url
      );
    }

    checkAuth();
    setModalOpen(false);
    resetForm({});
    getProfile();
  };
  console.log("the state value of the ");

  return (
    <Formik
      initialValues={{ ...landLordState, ...educationalHistory }}
      enableReinitialize
      onSubmit={handleSubmit}
      validationSchema={validation[modelCategory]}
    >
      {({
        isSubmitting,
        errors,
        touched,
        values,
        setFieldValue,
        resetForm,
        handleSubmit,
      }) => {
        console.log("validation=======", values);

        return (
          <form onSubmit={handleSubmit}>
            {field
              .filter((item) => item.category === modelCategory)
              .map((item) => {
                return (
                  <>
                    {item.fieldType === "avatar" ? (
                      <>
                        {/* <FileUploader
                          accept="image/jpeg, image/jpg, image/png"
                          onDelete={() => {
                            setFieldValue('avatar', null);
                          }}
                          onFileUpload={files =>
                            setFieldValue('avatar', files[0])
                          }
                          data={values?.avatar}
                        /> */}

                        {/* <Error message={errors?.avatar} /> */}
                      </>
                    ) : item.fieldType === "startDate" ? (
                      <div style={{ margin: "10px" }}>
                        <DatePicker
                          placeholder="starting Date"
                          picker="month"
                          format="YYYY/MMM"
                          name={item.name}
                          onChange={(data, dataStr) => {
                            setFieldValue(item.name, dataStr);
                          }}
                        />

                        <Error message={errors[item.name]} />
                      </div>
                    ) : item.fieldType === "endDate" ? (
                      <div style={{ margin: "10px" }}>
                        <DatePicker
                          placeholder="ending Date"
                          picker="month"
                          format="YYYY/MMM"
                          name={item.name}
                          onChange={(data, dataStr) => {
                            setFieldValue(item.name, dataStr);
                          }}

                          // onChange={(name, date) => handleDateChange(name, date)}
                        />

                        <Error message={errors[item.name]} />
                      </div>
                    ) : (
                      <div style={{ margin: "10px" }}>
                        <Field
                          name={item.name}
                          label={item.label}
                          placeholder={item.label}
                        />
                        <Error message={errors[item.name]} />
                      </div>
                    )}
                  </>
                );
              })}

            <Row
              justify={"end"}
              style={{
                width: "100%",
              }}
            >
              <AppButton
                htmlType="submit"
                block={true}
                backgroundColor="primary"
                // disabled={isSubmitting || changeRequestLoading}
                // loading={changeRequestLoading || isSubmitting}
              >
                Add
              </AppButton>
            </Row>
            {/* <Field
          component={TextField}
          label="Your proposal"
          name="desc"
        />
        <Field
          component={InputField}
          label="Your price"
          name="price"
          type="number"
        /> */}
          </form>
        );
      }}
    </Formik>
  );
};

export default AddFormik;
const field = [
  {
    name: "avatar",
    label: "Avatar",
    fieldType: "avatar",
    category: "avatar",
  },
  {
    name: "bio",
    label: "Bio",
    fieldType: "text",
    category: "bio",
  },
  {
    name: "address",
    label: "Address",
    fieldType: "text",
    category: "bio",
  },
  {
    name: "landlordName",
    label: "landlord Name",
    fieldType: "text",
    category: "rentalHistory",
  },
  {
    name: "landlordEmail",
    label: "landlord Email",
    fieldType: "text",
    category: "rentalHistory",
  },
  {
    name: "propertyAddress",
    label: "Property Address",
    fieldType: "text",
    category: "rentalHistory",
  },
  {
    name: "rentalStartingDate",
    label: "Starting Date",
    fieldType: "startDate",
    category: "rentalHistory",
  },
  {
    name: "rentalEndingDate",
    label: "Ending Date",
    fieldType: "endDate",
    category: "rentalHistory",
  },
  {
    name: "school",
    label: "School",
    fieldType: "text",
    category: "educationalHistory",
  },
  {
    name: "degree",
    label: "Degree",
    fieldType: "text",
    category: "educationalHistory",
  },
  {
    name: "fieldOfStudy",
    label: "Field OF Study",
    fieldType: "text",
    category: "educationalHistory",
  },
  {
    name: "educationStartDate",
    label: "Starting Date",
    fieldType: "startDate",
    category: "educationalHistory",
  },
  {
    name: "educationEndDate",
    label: "Ending Date",
    fieldType: "endDate",
    category: "educationalHistory",
  },
];

const validation = {
  rentalHistory: yup.object().shape({
    landlordName: yup
      .string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    propertyAddress: yup
      .string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    landlordEmail: yup.string().email("Invalid email").required("Required"),
    rentalStartingDate: yup.date().required("Required").nullable(),
    rentalEndingDate: yup.date().required("Required").nullable(),
  }),
};
