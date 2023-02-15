import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
const Container = styled.div`
  position: relative;
  display: inline-block;
  background-color: #fafafa;
  border: 1px solid #f0f0f0;
  border-radius: 2px;
  margin: 5px;
`;

const Button = styled.div`
  height: 100px;
  width: 100px;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const FileInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100px;
  overflow: hidden;
  opacity: 0;
  z-index: 9999;
  font-size: 100px;
`;

const Image = styled.img`
  height: 100px;
  width: 100px;
  object-fit: cover;
  border-radius: 2px;
`;

const CloseIcon = styled(FontAwesomeIcon)`
  color: red;
  background-color: white;
  border-radius: 20px;
  position: absolute;
  top: -5px;
  right: -5px;
  font-size: 20px;
  cursor: pointer;
`;

type FileUploaderProps = {
  accept: string;
  data: any;
  multiple?: boolean;
  onFileUpload: (files: any[]) => void;
  onDelete?: () => void;
};

const FileUploader: React.FC<FileUploaderProps> = ({
  accept,
  multiple,
  onFileUpload,
  onDelete,
  data,
}) => {
  const onFileChange = (event) => {
    onFileUpload(
      [...event.target.files].filter((item) => accept.includes(item.type))
    );
  };

  let src = "";
  if (typeof data === "string") {
    src = data;
  } else {
    if (data?.URL) {
      src = data.URL;
    } else {
      try {
        src = URL.createObjectURL(data);
      } catch (err) {}
    }
  }

  return (
    <Container>
      {!!data ? (
        <>
          <Image src={src} />
          <CloseIcon
            icon="times-circle"
            onClick={() => {
              onDelete?.();
            }}
          />
        </>
      ) : (
        <>
          <Button>
            <FontAwesomeIcon icon="plus" />
          </Button>
          <FileInput
            type="file"
            onChange={onFileChange}
            accept={accept}
            multiple={multiple}
          />
        </>
      )}
    </Container>
  );
};

export default FileUploader;
