import React from "react";
import { Typography } from "antd";
import styled from "styled-components";
import { devices } from "@/utils/theme";
import {
  ColunmAlignItemsCenter,
  DisplayFlexColumn,
  RowAlignItemsCenter,
} from "../common/style";

const CardImage = styled.img`
  width: 160px;
  height: 160px;
  @media ${devices.laptopXL} {
    width: 200px;
    height: 200px;
  }
  @media ${devices.Desktop} {
    width: 280px;
    height: 280px;
  }
`;
const PropertyStats = styled.div`
  ${DisplayFlexColumn}
`;

const ExplorePlaceCard = ({ name, totalSites, pic }: any) => {
  return (
    <div>
      <CardImage src={pic} />
      <PropertyStats>
        <Typography.Title level={5}>{name}</Typography.Title>
        <Typography.Text type="secondary">
          {totalSites} properties
        </Typography.Text>
      </PropertyStats>
    </div>
  );
};

export default ExplorePlaceCard;
