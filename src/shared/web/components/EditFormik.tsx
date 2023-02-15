// import { Button, DatePicker, Row } from "antd";
// import { Field, Formik } from "formik";
// import useAPI from "@/hooks/api";
// import _ from "lodash";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useRoot } from "@/RootProvider";
// import * as yup from "yup";
// import AppButton from "./Button";
// import DatePickerField from "./DatePicker";
// import Error from "./Error";
// import FileUploader from "./FileUploader";

// const EditFormik = ({
//   modelCategory,
//   setModalOpen,
//   isAddOrEditOrDelete,
//   setIsAddOrEditOrDelete,
//   setModelCategory,
//   userBio,
//   setUserBio,
//   item,
// }) => {
//   console.log("the items=====", item);
//   const { id: userId } = useParams();
//   const { auth, checkAuth } = useRoot();
//   const [isChangeProfileVisible, setChangeProfileVisible] = useState(false);
//   const [initialValues, setInitialValues] = useState({
//     avatar: "",
//   });

//   useEffect(() => {
//     setInitialValues({
//       ...initialValues,
//       ...{
//         landlordName: item.landlordName ? item.landlordName : "",
//         landlordEmail: item.landlordEmail ? item.landlordEmail : "",
//         propertyAddress: item.propertyAddress ? item.propertyAddress : "",
//       },
//       ...{
//         school: item.school ? item.school : "",
//         degree: item.degree ? item.degree : "",
//         fieldOfStudy: item.fieldOfStudy ? item.fieldOfStudy : "",
//         educationStartDate: item.startMonth ? item.startMonth : "",
//         educationEndDate: item.endMonth ? item.endMonth : "",
//       },
//     });
//   }, [item]);
//   const [
//     handleSubmitRequest,
//     { data: editableData, loading: changeRequestLoading },
//   ] = useAPI();
//   const [getProfileRequest, { loading, data: profile }] = useAPI();

//   // const [userBio, setUserBio] = useState<userInfoTypes>({
//   //   bio: '',
//   //   address: '',
//   //   avatar: '',
//   // });
//   // interface userInfoTypes {
//   //   bio: string;
//   //   address: string;
//   //   avatar: string;
//   // }

//   const getProfile = async () => {
//     const res = await getProfileRequest({
//       method: "get",
//       url: `v1/auth/profile/${userId || auth?.id}`,
//     });

//     setUserBio(res?.user);
//   };

//   const handleSubmit = async (values, { resetForm }) => {
//     console.log("this is calling");
//     if (userBio.bio !== values.bio || userBio.address !== values.address) {
//       console.log("the is changing======");
//       await handleSubmitRequest({
//         method: "patch",
//         url: "v1/auth/updateBio",
//         data: { bio: values.bio, address: values.address },
//       });
//     }
//     if (modelCategory === "rentalHistory") {
//       await handleSubmitRequest({
//         method: "patch",
//         url: `v1/auth/rentalHistories/${item.id}`,
//         data: values,
//       });
//     }
//     if (modelCategory === "educationalHistory") {
//       await handleSubmitRequest({
//         method: "patch",
//         url: `v1/auth/educationHistories/${item.id}`,
//         data: values,
//       });
//     }

//     let formData = new FormData();
//     if (values.avatar?.name) {
//       formData.append("images", values.avatar, "avatar");
//     }
//     if (values.identity?.name) {
//       formData.append("images", values.identity, "identity");
//     }

//     await handleSubmitRequest({
//       method: "post",
//       url: "v1/auth/updateDocuments",
//       data: formData,
//     });

//     checkAuth();
//     setModalOpen(false);
//     resetForm({});
//     getProfile();
//     // if (values.accountType === 'company') {
//     //   await handleSubmitRequest({
//     //     method: 'post',
//     //     url: 'v1/auth/createCompany',
//     //     data: companyValues,
//     //   });
//     // }
//   };
//   console.log("the state value is ======", userBio);

//   console.log(initialValues, "initial values");
//   return (
//     <Formik
//       initialValues={initialValues}
//       enableReinitialize={true}
//       onSubmit={handleSubmit}
//       // validationSchema={yup.object().shape({
//       //   avatar: yup.mixed().required('Please upload profile picture'),
//       // })}
//     >
//       {({
//         isSubmitting,
//         errors,
//         touched,
//         values,
//         resetForm,
//         setFieldValue,
//         handleSubmit,
//       }) => {
//         console.log("the value of the initalstate=======", values);
//         return (
//           <form onSubmit={handleSubmit}>
//             {field
//               .filter((item) => item.category === modelCategory)
//               .map((item) => {
//                 return (
//                   <>
//                     {item.fieldType === "avatar" ? (
//                       <>
//                         <FileUploader
//                           accept="image/jpeg, image/jpg, image/png"
//                           onDelete={() => {
//                             setFieldValue("avatar", null);
//                           }}
//                           onFileUpload={(files) =>
//                             setFieldValue("avatar", files[0])
//                           }
//                           data={values?.avatar}
//                         />

//                         <Error message={errors?.avatar} />
//                       </>
//                     ) : item.fieldType === "startDate" ? (
//                       <DatePicker
//                         placeholder="starting Date"
//                         picker="month"
//                         format="YYYY/MMM"
//                         name={item.name}
//                         onChange={(data, dataStr) => {
//                           setFieldValue(item.name, dataStr);
//                         }}
//                       />
//                     ) : item.fieldType === "endDate" ? (
//                       <DatePicker
//                         placeholder="ending Date"
//                         picker="month"
//                         format="YYYY/MMM"
//                         name={item.name}
//                         onChange={(data, dataStr) => {
//                           setFieldValue(item.name, dataStr);
//                         }}

//                         // onChange={(name, date) => handleDateChange(name, date)}
//                       />
//                     ) : (
//                       // onChange={(name, date) => handleDateChange(name, date)}
//                       <div style={{ margin: "10px" }}>
//                         <Field
//                           name={item.name}
//                           label={item.label}
//                           placeholder={item.label}
//                         />
//                       </div>
//                     )}
//                   </>
//                 );
//               })}

//             <Row
//               justify={"end"}
//               style={{
//                 width: "100%",
//               }}
//             >
//               <AppButton
//                 htmlType="submit"
//                 block={true}
//                 backgroundColor="primary"
//                 // disabled={
//                 //   !values?.avatar || isSubmitting || changeRequestLoading
//                 // }
//                 loading={changeRequestLoading || isSubmitting}
//               >
//                 Change
//               </AppButton>
//             </Row>
//             {/* <Field
//           component={TextField}
//           label="Your proposal"
//           name="desc"
//         />
//         <Field
//           component={InputField}
//           label="Your price"
//           name="price"
//           type="number"
//         /> */}
//           </form>
//         );
//       }}
//     </Formik>
//   );
// };

// export default EditFormik;
// const field = [
//   {
//     name: "avatar",
//     label: "Avatar",
//     fieldType: "avatar",
//     category: "avatar",
//   },
//   {
//     name: "bio",
//     label: "Bio",
//     fieldType: "text",
//     category: "bio",
//   },
//   {
//     name: "address",
//     label: "Address",
//     fieldType: "text",
//     category: "bio",
//   },
//   {
//     name: "landlordName",
//     label: "landlord Name",
//     fieldType: "text",
//     category: "rentalHistory",
//   },
//   {
//     name: "landlordEmail",
//     label: "landlord Email",
//     fieldType: "text",
//     category: "rentalHistory",
//   },
//   {
//     name: "propertyAddress",
//     label: "Property Address",
//     fieldType: "text",
//     category: "rentalHistory",
//   },
//   {
//     name: "rentalStartingDate",
//     label: "Starting Date",
//     fieldType: "startDate",
//     category: "rentalHistory",
//   },
//   {
//     name: "rentalEndingDate",
//     label: "Ending Date",
//     fieldType: "endDate",
//     category: "rentalHistory",
//   },
//   {
//     name: "school",
//     label: "School",
//     fieldType: "text",
//     category: "educationalHistory",
//   },
//   {
//     name: "degree",
//     label: "Degree",
//     fieldType: "text",
//     category: "educationalHistory",
//   },
//   {
//     name: "fieldOfStudy",
//     label: "Field OF Study",
//     fieldType: "text",
//     category: "educationalHistory",
//   },
//   {
//     name: "educationStartDate",
//     label: "Starting Date",
//     fieldType: "startDate",
//     category: "educationalHistory",
//   },
//   {
//     name: "educationEndDate",
//     label: "Ending Date",
//     fieldType: "endDate",
//     category: "educationalHistory",
//   },
// ];
import React from "react";

const EditFormik = () => {
  return <div>EditFormik</div>;
};

export default EditFormik;
