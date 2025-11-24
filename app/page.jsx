// app/page.jsx
import React from "react";
import Slider from "./home/components/home slider section/HomeSliderSection";
import HomeAboutSection from "./home/components/home about section/HomeAboutSection";
import HomeServices from "./home/components/home our services section/HomeServices";
import HomeNewsletter from "./home/components/home newsletter section/HomeNewsletter";
import HomeMenu from "./home/components/home menu section/HomeMenu";

export default function Page() {
  return (
    <>
      <Slider />
      <HomeAboutSection />
      <HomeServices />
      <HomeNewsletter />
      <HomeMenu />
    </>
  );
}
