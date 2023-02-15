import React from "react";
import { Upload, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import { UploadFile } from "antd/lib/upload/interface";
import { FormikErrors, FormikTouched } from "formik";
import Error from "./Error";

type FieldType = {
  name: string;
};

type MetaType = {
  errors?: FormikErrors<object> | undefined;
  touched?: FormikTouched<object> | undefined;
  submitCount: number;
};

type UploaderProps = {
  field: FieldType;
  maxUploadLimit?: number;
  setFieldValue: Function;
  image: string;
  form: MetaType;
};

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

const Uploader = ({
  maxUploadLimit = 1,
  field: { name },
  form: { errors, touched, submitCount },
  setFieldValue,
  image,
}: UploaderProps) => {
  const [previewVisible, setPreviewVisible] = useState<boolean>(false);
  const [previewImage, setPreviewImage] = useState<string>("");
  const [previewTitle, setPreviewTitle] = useState<string>("");
  const images = ((image && [{ url: image }]) as UploadFile<any>[]) || [];
  const [fileList, setFileList] = useState(images || []);

  const handleCancel = () => setPreviewVisible(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  const handleChange = async (e) => {
    const file = e.fileList[0]?.originFileObj;
    setFileList(e.fileList);
    setFieldValue(name, file);
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const onRemove = () => {
    setFileList([]);
  };

  const hasError = errors?.[name] && (touched?.[name] || !!submitCount);
  return (
    <>
      <Upload
        beforeUpload={() => false}
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        name={name}
        onRemove={onRemove}
      >
        {fileList.length === maxUploadLimit ? null : uploadButton}
      </Upload>
      {hasError && <Error message={errors && errors[name]} />}
      <Modal
        visible={previewVisible}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img
          alt="example"
          style={{ width: "100%" }}
          src={previewImage || image}
        />
      </Modal>
    </>
  );
};

export default Uploader;
