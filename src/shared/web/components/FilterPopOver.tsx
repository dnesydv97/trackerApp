import { Select, Typography } from "antd";
// import { optionTypes } from '@/containers/Bookings';
import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import useAPI from "@/hooks/api";
import { set, update } from "@/store/actions";
import makeRequest from "@/utils/request";

const PopoverContentWrapperStyle = styled.div`
  display: flex;
  flex-direction: column;
`;
const SortWrapperStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const FilterPopOver = ({
  hide,
  options,
  url,
  setParams,
  params,
  handleRequest,
}) => {
  console.log("the url is=====", url);
  const dispatch = useDispatch();
  const myPropertiesSelector = useSelector((state) => state.myProperties);
  const [getMyPropertiesRequest, { data: properties, loading }] = useAPI();
  const [sort, setSort] = useState({});
  const { featureoption, sortingoption } = options;
  const handleFilter = () => {
    hide();
    handleRequest();
  };
  return (
    <PopoverContentWrapperStyle>
      <SortWrapperStyle>
        <Typography.Text strong>Filter By:</Typography.Text>
        {featureoption?.map((item) => {
          const { data, placeholder, key } = item;
          return (
            <>
              <Select
                style={{ width: 180, marginTop: "5px" }}
                placeholder={placeholder}
                key={key}
                onChange={(value) => {
                  setSort({ ...sort, [key]: value });
                }}
                options={[...data]}
              />
            </>
          );
        })}
      </SortWrapperStyle>

      <SortWrapperStyle>
        <Typography.Text strong>Sort By:</Typography.Text>
        {sortingoption?.map((item) => {
          const { data, placeholder, key } = item;
          return (
            <>
              <Select
                style={{ width: 180, marginTop: "8px" }}
                placeholder={placeholder}
                key={key}
                onChange={(value) => {
                  setSort({ ...sort, [key]: value });
                  setParams({ ...params, sort: value, page: 0 });
                }}
                options={[...data]}
              />
            </>
          );
        })}
      </SortWrapperStyle>

      <Button
        backgroundColor="primary"
        onClick={() => {
          handleFilter();
        }}
      >
        Apply
      </Button>
    </PopoverContentWrapperStyle>
  );
};
export default FilterPopOver;
