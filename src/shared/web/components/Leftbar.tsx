import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Typography } from "antd";
export type MenuType = {
  title: string;
  url: string;
  icon: any;
  children?: Omit<MenuType, "icon">[];
};
const Logo = styled.img`
  height: 70px;
  width: 100px;
  margin: auto 0;
`;
const ListItem = styled.div<{ isActive: boolean }>`
  padding: 4px 7px;
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.primary : " #767676"};
  cursor: pointer;
  &:hover {
    background-color: #f1f3f4;
  }
`;
const Leftbar: React.FC<{
  list: MenuType[];
}> = ({ list }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const getMenuItem = ({ singleOption }: { singleOption: MenuType | any }) => {
    const { url, title, icon, children } = singleOption;
    if (children) {
      return (
        <>
          <ListItem
            isActive={pathname === url}
            onClick={() => {
              navigate(url);
            }}
          >
            <FontAwesomeIcon
              icon={icon}
              style={{ marginRight: 10, width: 20 }}
            />
            <span>{title}</span>
          </ListItem>
          <div
            style={{
              height:
                pathname === url ? `${children.length * 30 + 10}px` : "0px",
              transition: "height 0.2s ease-out",
              overflow: "hidden",
            }}
          >
            {children.map((item) => (
              <ListItem
                isActive={pathname === item.url}
                onClick={() => {
                  navigate(item.url);
                }}
                style={{
                  paddingLeft: 40,
                }}
              >
                <span>{item.title}</span>
              </ListItem>
            ))}
          </div>
        </>
      );
    }
    return (
      <ListItem
        isActive={pathname === url}
        onClick={() => {
          navigate(url);
        }}
      >
        <FontAwesomeIcon icon={icon} style={{ marginRight: 10, width: 20 }} />
        <span>{title}</span>
      </ListItem>
    );
  };
  return (
    <div
      style={{
        height: "100vh",
        position: "fixed",
        left: 0,
        backgroundColor: "#FAFAFA",
        borderRight: "1px solid #F0F0F0",
        width: 220,
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        {/* <Logo src="/logo.svg" alt="Logo" /> */}
      </div>
      {list.map((singleOption) => getMenuItem({ singleOption }))}
      <div
        style={{
          textAlign: "center",
          position: "absolute",
          bottom: 100,
          left: 0,
          right: 0,
        }}
      >
        <Typography.Text style={{ textAlign: "center" }} type="secondary">
          Version 0.0.1
        </Typography.Text>
      </div>
    </div>
  );
};
//@ts-ignore
export default Leftbar;
