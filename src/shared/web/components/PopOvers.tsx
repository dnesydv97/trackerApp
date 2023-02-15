import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Popover } from "antd";
import { optionTypes } from "@/containers/Bookings";
import React, { useState } from "react";
import styled from "styled-components";
import FilterPopOver from "./FilterPopOver";

const FontIconStyle = styled(FontAwesomeIcon)`
  margin-right: 5px;
`;

interface PopOverType {
  options: optionTypes;
}

const PopOvers: React.FC<PopOverType> = ({
  options,
  url,
  setParams,
  params,
  handleRequest,
}) => {
  const [open, setOpen] = useState(false);
  const hide = () => {
    setOpen(false);
  };
  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };
  return (
    <div>
      <Popover
        content={
          <FilterPopOver
            hide={hide}
            options={options}
            url={url}
            setParams={setParams}
            params={params}
            handleRequest={handleRequest}
          />
        }
        placement="leftBottom"
        trigger="click"
        open={open}
        onOpenChange={handleOpenChange}
      >
        <Button size="large" icon={<FontIconStyle icon="sliders" />} />
      </Popover>
    </div>
  );
};

export default PopOvers;
