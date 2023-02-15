import React from "react";
import ProfileAvatar from "./Avatar";
import { Typography } from "antd";
import styled from "styled-components";
import ProfileContent from "./ProfileContent";
import { devices } from "../../../../packages/web/src/utils/theme";
const ProfieWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px;
  @media${devices.tablet} {
    padding: 16px;
  }
`;
const ProfileCard = ({ tenantData, showDetails }) => {
  const { tenant, property, data } = tenantData;
  const parseData = JSON.parse(data);
  // console.log("the parse data is ====", parseData, tenant, tenantData);
  return (
    <ProfieWrapper>
      <ProfileAvatar
        size={64}
        icon="user"
        style={{ marginRight: "10px", marginTop: "10px", color: "#007FFF" }}
      />
      <ProfileContent
        tenant={tenant}
        data={parseData}
        property={property}
        showDetails={showDetails}
      />
    </ProfieWrapper>
  );
};

export default ProfileCard;
