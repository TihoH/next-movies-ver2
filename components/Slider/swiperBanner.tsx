"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./styles.css";

import { Autoplay } from "swiper/modules";
import SwiperItem from "./swiperItem";
import { genre, Movie } from "@/types/movieTypes";
import { useState } from "react";

interface SwiperBannerProps {
  dataList: Movie[];
  genres: genre[];
}

export default function SwiperBanner({ dataList, genres }: SwiperBannerProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bannerSlider">
      <Swiper
        slidesPerView={"auto"}
        loop={false}
        spaceBetween={20}
        speed={1200}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="bannerSwiper"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {dataList.map((sliderItem, idx) => (
          <SwiperSlide key={sliderItem.id ?? idx}>
            <SwiperItem
              sliderItem={sliderItem}
              priority={idx === 0}
              idx={idx}
              activeIndex={activeIndex}
              genres={genres}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
