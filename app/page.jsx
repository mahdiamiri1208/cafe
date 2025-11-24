import React from "react";
import Slider from "./home/components/home slider section/HomeSliderSection";
import HomeAboutSection from "./components/about section/AboutSection";
import HomeServices from "./components/our services section/Services";
import HomeNewsletter from "./home/components/home newsletter section/HomeNewsletter";
import HomeMenu from "./components/menu section/Menu";
import HomeBookTable from "./components/book table/BookTable";
import HomeComment from "./components/comment/Comment";

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
