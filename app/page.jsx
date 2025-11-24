import React from "react";
import Slider from "./home/components/home slider section/HomeSliderSection";
import HomeAboutSection from "./components/about section/AboutSection";
import HomeServices from "./components/our services section/Services";
import HomeNewsletter from "./home/components/home newsletter section/HomeNewsletter";
import HomeMenu from "./components/menu section/Menu";
import HomeBookTable from "./home/components/home book table section/HomeBookTable";
import HomeComment from "./home/components/home comment section/HomeComment";

export default function Page() {
  return (
    <>
      <Slider />
      <HomeAboutSection />
      <HomeServices />
      <HomeNewsletter />
      <HomeMenu />
      <HomeBookTable />
      <HomeComment />
    </>
  );
}
