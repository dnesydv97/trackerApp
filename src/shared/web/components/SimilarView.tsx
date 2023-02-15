import { Typography } from "antd";

import styled from "styled-components";
import { Grid, Tag } from "antd";

import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";
import { devices } from "@/utils/theme";
import SimilarItemCard from "./SimilarViewItem";

const { useBreakpoint } = Grid;
const Container = styled.div`
  .swiper-button-prev {
    font-weight: 900;
    top: 42%;
    left: -2%;
  }
  .swiper-button-next {
    font-weight: 900;
    top: 42%;
    right: -2%;
  }
`;
const SwiperSlideStyle = styled(SwiperSlide)`
  & > img {
    width: 100px;
    height: 100px;
    border: 1px solid red;
    @media ${devices.laptopXL} {
      width: 200px;
      height: 200px;
    }
    @media ${devices.Desktop} {
      width: 280px;
      height: 280px;
    }
  }
`;

const SimilarItems = ({ similarPropertyData }: any) => {
  const screens = useBreakpoint();
  console.log("the screens====", screens);

  return (
    <Container>
      <Typography.Title level={4}>Similar Properties</Typography.Title>
      {/* <Typography.Text type="secondary">
        These popular destinations have a lot to offer
      </Typography.Text> */}
      <div style={{ position: "relative" }}>
        <Swiper
          slidesPerView={
            screens.xxl
              ? 5
              : screens.xl
              ? 4
              : screens.lg
              ? 4
              : screens.md
              ? 4
              : screens.sm
              ? 3
              : 2
          }
          spaceBetween={
            screens.xxl
              ? 30
              : screens.xl
              ? 30
              : screens.lg
              ? 20
              : screens.md
              ? 20
              : screens.xs
              ? 10
              : 10
          }
          navigation={true}
          modules={[Navigation]}
          style={{ marginLeft: "20px", marginRight: "20px", position: "unset" }}
          className="mySwiper"
        >
          {similarPropertyData?.map((item: any) => {
            console.log("the items====", item);
            const { id, address, price, images } = item;
            console.log("the value of the images is====", images[0]);
            return (
              <SwiperSlide key={item.id}>
                <SimilarItemCard
                  name={address}
                  price={price}
                  pic={images[0]}
                  id={id}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </Container>
  );
};

export default SimilarItems;
