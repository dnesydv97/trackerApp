// import { Modal, Row } from 'antd';
// import { Field, Form, Formik } from 'formik';
// import useAPI from '@/hooks/api';
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { useRoot } from '@/RootProvider';
// import AppButton from './Button';
// import Error from './Error';
// import FileUploader from './FileUploader';
// import * as yup from 'yup';
// import styled from 'styled-components';
// import InputField from './InputField';

// const ProfileField = styled.div`
//   display: flex;
//   flex-direction: column;
//   & > :not(:last-child) {
//     margin-bottom: 10px;
//   }
// `;

// const ProfileAddEdit = ({
//   isChangeProfileVisible,
//   setChangeProfileVisible,
//   addModel,
// }) => {
//   const { id: userId } = useParams();
//   const { auth, checkAuth } = useRoot();

//   const [handleSubmitRequest, { loading: changeRequestLoading }] = useAPI();
//   const [getProfileRequest, { loading, data: profile }] = useAPI();
//   const getProfile = async () => {
//     await getProfileRequest({
//       method: 'get',
//       url: `v1/auth/profile/${userId || auth?.id}`,
//     });
//   };
//   useEffect(() => {
//     getProfile();
//   }, []);
//   console.log('the data is =====', addModel);
//   const handleSubmit = async values => {
//     let formData = new FormData();
//     if (values.avatar?.name) {
//       formData.append('images', values.avatar, 'avatar');
//     }
//     if (values.identity?.name) {
//       formData.append('images', values.identity, 'identity');
//     }

//     await handleSubmitRequest({
//       method: 'post',
//       url: 'v1/auth/updateDocuments',
//       data: formData,
//     });
//     checkAuth();
//     setChangeProfileVisible(false);
//     // if (values.accountType === 'company') {
//     //   await handleSubmitRequest({
//     //     method: 'post',
//     //     url: 'v1/auth/createCompany',
//     //     data: companyValues,
//     //   });
//     // }
//   };

//   return (
//     <Modal
//       title="Change profile picture"
//       visible={isChangeProfileVisible}
//       footer={null}
//       onCancel={() => setChangeProfileVisible(false)}
//     >
//       <Formik
//         initialValues={{
//           avatar: profile?.user?.avatar,
//         }}
//         enableReinitialize
//         onSubmit={handleSubmit}
//         validationSchema={yup.object().shape({
//           avatar: yup.mixed().required('Please upload profile picture'),
//         })}
//       >
//         {({
//           isSubmitting,
//           errors,
//           touched,
//           values,
//           setFieldValue,
//           handleSubmit,
//         }) => {
//           return (
//             <Form onSubmit={handleSubmit}>
//               {/* <Field
//               component={TextField}
//               label="Your proposal"
//               name="desc"
//             />
//             <Field
//               component={InputField}
//               label="Your price"
//               name="price"
//               type="number"
//             /> */}
//               <FileUploader
//                 accept="image/jpeg, image/jpg, image/png"
//                 onDelete={() => {
//                   setFieldValue('avatar', null);
//                 }}
//                 onFileUpload={files => setFieldValue('avatar', files[0])}
//                 data={values.avatar}
//               />
//               <ProfileField>
//                 <Field
//                   component={InputField}
//                   label="FirstName"
//                   name="firstname"
//                 />
//                 <Field
//                   component={InputField}
//                   label="LastName"
//                   name="lastname"
//                 />
//                 <Field component={InputField} label="Bio" name="bio" />
//               </ProfileField>

//               <Error message={errors.avatar} />
//               <Row
//                 justify={'end'}
//                 style={{
//                   width: '100%',
//                 }}
//               >
//                 <AppButton
//                   htmlType="submit"
//                   block={true}
//                   backgroundColor="primary"
//                   disabled={
//                     !values?.avatar || isSubmitting || changeRequestLoading
//                   }
//                   loading={changeRequestLoading || isSubmitting}
//                 >
//                   Change
//                 </AppButton>
//               </Row>
//               {addModel ? (
//                 <Row
//                   justify={'end'}
//                   style={{
//                     width: '100%',
//                   }}
//                 >
//                   <AppButton
//                     htmlType="submit"
//                     block={true}
//                     backgroundColor="primary"
//                     disabled={
//                       !values?.avatar || isSubmitting || changeRequestLoading
//                     }
//                     loading={changeRequestLoading || isSubmitting}
//                   >
//                     Add
//                   </AppButton>
//                 </Row>
//               ) : (
//                 <Row
//                   justify={'end'}
//                   style={{
//                     width: '100%',
//                   }}
//                 >
//                   <AppButton
//                     htmlType="submit"
//                     block={true}
//                     backgroundColor="primary"
//                     disabled={
//                       !values?.avatar || isSubmitting || changeRequestLoading
//                     }
//                     loading={changeRequestLoading || isSubmitting}
//                   >
//                     Change
//                   </AppButton>
//                 </Row>
//               )}
//             </Form>
//           );
//         }}
//       </Formik>
//     </Modal>
//   );
// };

// export default ProfileAddEdit;
import React from "react";

const ProfileAddEdit = () => {
  return <div>ProfileAddEdit</div>;
};

export default ProfileAddEdit;
