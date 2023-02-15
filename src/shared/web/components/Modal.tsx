import React from "react";
import styled from "styled-components";
import { Modal } from "antd";

const StyledModal = styled(Modal)`
  .ant-modal-content {
    background: #ffffff;
    box-shadow: 0px 4px 20px 4px rgba(0, 0, 0, 0.3);
    border-radius: 4px;
  }
`;

type AppModalType = {
  handleClose: () => void;
  visible: boolean;
  width?: string;
  children: React.ReactNode;
  style?: any;
  title?: string;
};
const AppModal = ({
  handleClose,
  children,
  visible,
  width = "50%",
  style = {},
  title,
}: AppModalType) => {
  return (
    <StyledModal
      title={title}
      destroyOnClose={true}
      visible={visible}
      onCancel={handleClose}
      footer={null}
      style={style}
      maskClosable={false}
      width={width}
    >
      {children}
    </StyledModal>
  );
};
export default AppModal;
