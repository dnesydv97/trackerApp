import React, { useState, useMemo } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "antd";
import { Button } from "antd";
import moment from "moment";
import { getTodaysDay, getWeekDays } from "../../front/utils/calender";
import { ColunmAlignItemsJustifyCenter } from "../../web/common/style";
import createTheme, { devices } from "../../../packages/web/src/utils/theme";

const theme = createTheme();

const ButtonIcon = styled(Button)`
  border: none;
`;

const Container = styled.div`
  width: 100%;
  padding: 0px 10px;
`;
const DayView = styled.div`
  width: 40px;

  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  ${ColunmAlignItemsJustifyCenter}
  @media ${devices.tablet} {
    width: 100px;
    border-radius: 10px;
    padding: 10px 0px;
  }

  &.active {
    background-color: ${theme.colors.primary};
    > * {
      color: ${theme.colors.white};
    }
  }
`;
const SliderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const SliderWrapper = styled.div`
  display: flex;
  width: 140px;
  justify-content: space-between;
  align-items: center;
`;
const CalenderWrapper = styled.div`
  margin: 20px 0px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const DayNameMapping = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const Calendar = ({}) => {
  const [activeWeekDay, setActiveWeekDay] = useState(moment().toLocaleString());

  const weekdays = getWeekDays(moment(activeWeekDay).toLocaleString());
  const ref = moment();

  return (
    <Container>
      <SliderContainer>
        <Typography.Title level={4}>Event in this week</Typography.Title>
        <SliderWrapper>
          <ButtonIcon
            shape="circle"
            icon={
              <FontAwesomeIcon
                icon={["fas", "circle-chevron-left"]}
                color={theme.colors.primary}
                size="2xl"
              />
            }
            onClick={() =>
              setActiveWeekDay((current) =>
                moment(current).subtract(7, "days").toLocaleString()
              )
            }
          ></ButtonIcon>
          <ButtonIcon
            shape="circle"
            icon={
              <FontAwesomeIcon
                icon={["fas", "calendar-week"]}
                color={theme.colors.primary}
                size="2xl"
              />
            }
            onClick={() =>
              setActiveWeekDay((current) => moment().toLocaleString())
            }
          ></ButtonIcon>
          <ButtonIcon
            shape="circle"
            onClick={() =>
              setActiveWeekDay((current) =>
                moment(current).add(7, "days").toLocaleString()
              )
            }
          >
            <FontAwesomeIcon
              icon={["fas", "circle-chevron-right"]}
              color={theme.colors.primary}
              size="2xl"
            />
          </ButtonIcon>
        </SliderWrapper>
      </SliderContainer>

      <CalenderWrapper>
        {weekdays.map((day, index) => (
          <DayView
            key={`${day}${index}`}
            className={
              ref.format("YYYY-MM-DD") === day.format("YYYY-MM-DD")
                ? "active"
                : ""
            }
          >
            <Typography.Title level={5}>
              {DayNameMapping[index]}
            </Typography.Title>
            <Typography.Title level={4}>{day.format("DD")}</Typography.Title>
          </DayView>
        ))}
      </CalenderWrapper>
    </Container>
  );
};

export default Calendar;
