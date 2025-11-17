"use client"
import React from "react";
import styles from "./HomeSliderSection.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import carousel1 from "./carousel-1.jpg";
import carousel2 from "./carousel-2.jpg";

function HomeSliderSection() {
  return (
    <Swiper
      // rewind={true}
      loop={true}
      navigation={true}
      modules={[Navigation]}
      className={`${styles.swiper} overlay-bottom`}
    >
      <SwiperSlide
        className={styles.swiper_slide}
        style={{ backgroundImage: `url(${carousel1.src})`}}
      >
        <div
          className={`${styles.slider_caption} d-flex flex-column align-items-center justify-content-center`}
        >
          <h2 className="text-primary font-weight-medium m-0">
            We Have Been Serving
          </h2>
          <h1 className="display-1 text-white m-0">COFFEE</h1>
          <h2 className="text-white m-0">* SINCE 1950 *</h2>
        </div>
      </SwiperSlide>

      <SwiperSlide
        className={styles.swiper_slide}
        style={{ backgroundImage: `url(${carousel2.src})`}}
      >
        <div
          className={`${styles.slider_caption} d-flex flex-column align-items-center justify-content-center`}
        >
          <h2 className="text-primary font-weight-medium m-0">
            We Have Been Serving
          </h2>
          <h1 className="display-1 text-white m-0">COFFEE</h1>
          <h2 className="text-white m-0">* SINCE 1950 *</h2>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default HomeSliderSection;
