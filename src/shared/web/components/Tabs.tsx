import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";

const onChange = (key: string) => {
  console.log(key);
};

const TabComponent: React.FC = ({ items }) => (
  <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
);

export default TabComponent;
