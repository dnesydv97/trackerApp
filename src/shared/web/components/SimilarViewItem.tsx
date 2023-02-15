import React from "react";
import { Typography } from "antd";
import styled from "styled-components";
import { devices } from "@/utils/theme";
import { redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import {
  ColunmAlignItemsCenter,
  DisplayFlexColumn,
  RowAlignItemsCenter,
} from "../common/style";
const ImageContainer = styled.div`
  width: 120px;
  height: 120px;
  overflow: hidden;
  @media ${devices.laptopXL} {
    width: 200px;
    height: 200px;
  }
  @media ${devices.Desktop} {
    width: 170px;
    height: 170px;
  }
`;
const CardImage = styled.img`
  width: 100%;
  height: 100%;
  transition: transform 0.3s, filter 1.5s ease-in-out;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;
const PropertyStats = styled.div`
  ${DisplayFlexColumn}
`;

const SimilarItemCard = ({ name, price, pic, id }: any) => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log("the pic====", pic);
  return (
    <div>
      <ImageContainer
        onClick={() => {
          navigate(`/properties/${id}`, { replace: true });
        }}
      >
        <CardImage src={pic?.URL} />
      </ImageContainer>

      <PropertyStats>
        <Typography.Title level={5}>{name}</Typography.Title>
        <Typography.Text type="secondary">$ {price}</Typography.Text>
      </PropertyStats>
    </div>
  );
};

export default SimilarItemCard;
