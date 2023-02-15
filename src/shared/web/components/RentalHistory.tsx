import React from "react";
import styled from "styled-components";
import { Row, Typography, Divider, Timeline } from "antd";
import { devices } from "../../../packages/web/src/utils/theme";
import ProfileAvatar from "./ProfileCard/Avatar";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RentalHistoryWrapper = styled.div`
  border: 1px solid #ddd;
  border-radius: 20px;
  padding: 10px;
  @media${devices.tablet} {
    padding: 20px;
  }
`;
const RentalHistoryContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media${devices.tablet} {
    justify-content: flex-start;
  }
`;
const RentalHistoryDetail = styled.div`
  display: flex;
  flex-direction: column;
  @media${devices.tablet} {
    margin-right: 40px;
  }
`;
const RentalHistoryRating = styled.div`
  display: flex;
  flex-direction: column;
`;
const RentalHistory = () => {
  return (
    <RentalHistoryWrapper>
      <Typography.Title level={4}>Rental History</Typography.Title>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "350px",
        }}
      >
        <li>
          <Typography.Text>7 properties</Typography.Text>
        </li>
        <li>
          <Typography.Text>8 year</Typography.Text>
        </li>
        <li>
          <Typography.Text>3 cities</Typography.Text>
        </li>
      </ul>
      <Divider style={{ borderWidth: "2px" }} />

      <Timeline>
        {new Array(3).fill(0).map((item) => {
          return (
            <Timeline.Item>
              <RentalHistoryContent>
                <RentalHistoryDetail>
                  <Typography.Title level={5}>
                    181876 Green Street
                  </Typography.Title>
                  <Typography.Text>Salt Lake City, UT 84106</Typography.Text>
                  <Typography.Text>Feb 2020 - Jan 2021</Typography.Text>
                  <Typography.Text>Rent: $2300 /month</Typography.Text>
                </RentalHistoryDetail>
                <RentalHistoryRating>
                  <ProfileAvatar icon="user" />
                  <Rating
                    emptySymbol={<FontAwesomeIcon icon={["far", "star"]} />}
                    fullSymbol={
                      <FontAwesomeIcon icon={["fas", "star"]} color="#00ffff" />
                    }
                    initialRating={2.5}
                    readonly
                  />
                  <div>Landlord Rent</div>
                </RentalHistoryRating>
              </RentalHistoryContent>
            </Timeline.Item>
          );
        })}
      </Timeline>
    </RentalHistoryWrapper>
  );
};

export default RentalHistory;
