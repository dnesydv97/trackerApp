import { Button, Row, Col } from "antd";
import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type PaginationType = {
  count: number;
  page: number;
  lastPage: number;
  limit: number;
  onPrev: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onNext: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const StyledWrapper = styled(Row)`
  margin: 10px 0px;
  align-items: center;
  justify-content: space-between;
`;

const Pagination = ({
  count,
  page,
  lastPage,
  onNext,
  onPrev,
  limit,
}: PaginationType) => {
  return (
    <StyledWrapper>
      <Col>
        <span> {count} records</span>
      </Col>
      {count > limit && (
        <Col>
          <Button
            disabled={page === 0}
            onClick={onPrev}
            icon={
              <FontAwesomeIcon
                icon="chevron-left"
                style={{
                  fontSize: 14,
                }}
              />
            }
          />
          <Button
            disabled={page === lastPage}
            onClick={onNext}
            icon={
              <FontAwesomeIcon
                icon="chevron-right"
                style={{
                  fontSize: 14,
                }}
              />
            }
          />
        </Col>
      )}
    </StyledWrapper>
  );
};

export default Pagination;
