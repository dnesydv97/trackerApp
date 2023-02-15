import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import useAPI from "@/hooks/api";
import { ReactPhotoCollage } from "react-photo-collage";
import LoadingPlaceholder from "@/components/LoadingPlaceholder";
import { Typography, Row, Col, Rate, Modal, DatePicker } from "antd";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";
import Tag from "@/components/Tag";
import Button from "@/components/Button";
import Steps from "@/components/Steps";
import numeral from "numeral";
import { toast } from "react-toastify";
import Constants from "@/constants";
import { capitalize } from "lodash";
import Error from "@/components/Error";
import { Formik, Field } from "formik";
import InputField from "@/components/InputField";
import TextField from "@/components/TextField";
import * as yup from "yup";
import ShowMoreText from "react-show-more-text";
import MaskInputField from "@/components/MaskInputField";

import request from "@/utils/request";
import moment from "moment";

const RightInnerBox = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 2px;
  padding: 10px;
  margin: 0 auto;
`;

const Avatar = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  margin-right: 20px;
`;

const Inner = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
`;

const SideProfile = ({ profile, isProfileViewable }) => {
  const navigate = useNavigate();
  return (
    <RightInnerBox>
      <Row justify="start">
        <Avatar src={profile?.avatar} />
        <Inner>
          <Typography.Text>{profile?.fullName}</Typography.Text>
          <Typography.Text style={{ display: "block" }}>
            {profile?.country}
          </Typography.Text>
          <Rate value={profile?.rating} disabled />
          <Tag type={profile?.role} />
        </Inner>
      </Row>
      {isProfileViewable && (
        <Button
          type="dashed"
          onClick={() => {
            navigate(`/profile/${profile?.id}`);
          }}
        >
          View profile
        </Button>
      )}
    </RightInnerBox>
  );
};

export default SideProfile;
