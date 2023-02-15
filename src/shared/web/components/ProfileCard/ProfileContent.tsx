import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "antd";
import styled from "styled-components";
import ProfileAvatar from "./Avatar";
import Rating from "react-rating";
const Content = styled.div``;
const UserTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const UserWrapper = styled.div`
  margin-left: 10px;
`;
const UserLocationStyle = styled.div`
  margin: 2px 0px;
`;

const ProfileContent = ({ tenant, data, property, showDetails }) => {
  const { firstName, lastName } = tenant;
  // const { address } = property;
  const { endDate } = data;
  // const [showDetails, setShowDetails] = useState(false);

  return (
    <Content>
      <UserWrapper>
        <UserTitle>
          <Typography.Title level={5} style={{ textTransform: "capitalize" }}>
            {firstName} {lastName}
          </Typography.Title>
          <ProfileAvatar
            size={18}
            icon="check"
            color="red"
            style={{
              marginLeft: "10px",
              marginBottom: "6px",
              backgroundColor: "aqua",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        </UserTitle>
        <UserLocationStyle>
          <ProfileAvatar
            size="small"
            icon="house"
            style={{
              marginRight: "10px",
              background: "none",
              color: "#AEB8CF",
            }}
          />
          <Typography.Text>
            {property?.address || "fake address"}
          </Typography.Text>
        </UserLocationStyle>
        <UserLocationStyle>
          <ProfileAvatar
            size="small"
            icon="calendar-days"
            style={{
              marginRight: "10px",
              background: "none",
              color: "#AEB8CF",
            }}
          />
          <Typography.Text>Ends: {endDate}</Typography.Text>
        </UserLocationStyle>
        <UserLocationStyle>
          <ProfileAvatar
            size="small"
            icon="calendar-days"
            style={{
              marginRight: "10px",
              background: "none",
              color: "#AEB8CF",
            }}
          />
          <Rating
            emptySymbol={<FontAwesomeIcon icon={["far", "star"]} />}
            fullSymbol={
              <FontAwesomeIcon icon={["fas", "star"]} color="#00ffff" />
            }
            initialRating={2.5}
            readonly
          />
          <></>
        </UserLocationStyle>
        {showDetails ? (
          <>
            <UserLocationStyle>
              <ProfileAvatar
                size="small"
                icon="calendar-days"
                style={{
                  marginRight: "10px",
                  background: "none",
                  color: "#AEB8CF",
                }}
              />
              <Typography.Text>Ends: 02/03/2023</Typography.Text>
            </UserLocationStyle>
            <UserLocationStyle>
              <ProfileAvatar
                size="small"
                icon="calendar-days"
                style={{
                  marginRight: "10px",
                  background: "none",
                  color: "#AEB8CF",
                }}
              />
              <Typography.Text>Ends: 02/03/2023</Typography.Text>
            </UserLocationStyle>
          </>
        ) : null}
      </UserWrapper>
    </Content>
  );
};

export default ProfileContent;
