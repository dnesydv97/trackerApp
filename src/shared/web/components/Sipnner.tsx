import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import styled from "styled-components";
const SpinnerStyle = styled(Spin)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const antIcon = <LoadingOutlined style={{ fontSize: 20 }} spin />;

const Spinner: React.FC = () => {
  return <SpinnerStyle indicator={antIcon} />;
};

export default Spinner;
