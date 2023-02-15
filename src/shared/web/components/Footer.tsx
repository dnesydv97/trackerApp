import { Col, Row, Typography } from "antd";
import React from "react";
import styled from "styled-components";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoImg from "../../../packages/web/public/logo.svg";
const StyledFooter = styled.footer`
  background-color: #140c41;
  padding: 20px;
  padding-top: 50px;
  color: rgba(255, 255, 255, 0.65);
  a {
    color: #fff !important;
  }
  h2 {
    color: rgba(255, 255, 255, 1);
    & > span {
      color: rgba(255, 255, 255, 1);
    }
  }
  .bottom-bar {
    /* border-top: 1px solid rgba(255, 255, 255, 0.25); */
    overflow: hidden;

    margin-top: 20px;
    align-items: center;
    justify-content: center;
  }
`;

const Logo = styled.img`
  height: 50px;
  width: 120px;

  cursor: pointer;
`;

const COMPANY_LINKS = [
  {
    title: "About",
    link: "/",
  },
  {
    title: "Careers",
    link: "/",
  },
  {
    title: "FAQs",
    link: "/terms",
  },
  {
    title: "Advertise",
    link: "/",
  },
  {
    title: "Terms & Privacy",
    link: "/",
  },
];

const EXPLORE_LINKS = [
  {
    title: "Tenants",
    link: "/",
  },
  {
    title: "Landlords",
    link: "/",
  },
  {
    title: "Home Service Providers",
    link: "/terms",
  },
  {
    title: "Utilities",
    link: "/",
  },
  {
    title: "Find A Property",
    link: "/",
  },
];

const Title = styled.p`
  font-size: 12px;
  color: #6d6b7e;
`;

const Images = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  > img {
    height: 40px;
    margin-right: 10px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Icon = styled.div`
  background: #49466b;
  border-radius: 40px;
  height: 40px;
  width: 40px;
  cursor: pointer;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-right: 10px;
`;

function Footer() {
  const navigate = useNavigate();
  return (
    <StyledFooter>
      <Row style={{}}>
        <Logo src={logoImg} alt="Logo" onClick={() => navigate("/")} />

        <Col md={7} sm={24} xs={24}>
          <div className="footer-center">
            <Title>EXPLORE</Title>
            {EXPLORE_LINKS.map((link) => (
              <div style={{ marginBottom: 10 }}>
                <a href={link.link}>{link.title}</a>
              </div>
            ))}
          </div>
        </Col>
        <Col md={7} sm={24} xs={24}>
          <div className="footer-center">
            <Title>COMPANY</Title>
            {COMPANY_LINKS.map((link) => (
              <div style={{ marginBottom: 10 }}>
                <a href={link.link}>{link.title}</a>
              </div>
            ))}
          </div>
        </Col>

        <Col md={5} sm={24} xs={24}>
          <div className="footer-center">
            <Title>MOBILE APPS</Title>
            <Images>
              <img src="/appstore.png" />
              <img src="/google-play-badge.png" />
            </Images>
            <Title>FOLLOW</Title>
            <IconContainer>
              <Icon>
                <FontAwesomeIcon
                  icon={["fab", "facebook"]}
                  style={{ color: "white" }}
                  fontSize={30}
                  size="lg"
                />
              </Icon>
              <Icon>
                <FontAwesomeIcon
                  icon={["fab", "twitter"]}
                  style={{ color: "white" }}
                  fontSize={30}
                  size="lg"
                />
              </Icon>
              <Icon>
                <FontAwesomeIcon
                  icon={["fab", "youtube"]}
                  style={{ color: "white" }}
                  fontSize={30}
                  size="lg"
                />
              </Icon>
            </IconContainer>
          </div>
        </Col>
      </Row>

      <Row className="bottom-bar">
        <span
          style={{
            marginTop: 20,
          }}
        >
          © Rentisity 2021 All rights reserved
        </span>
      </Row>
    </StyledFooter>
  );
}

export default Footer;
