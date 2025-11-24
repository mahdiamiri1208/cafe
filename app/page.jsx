// app/page.jsx
import React from "react";
import Slider from "./home/components/home slider section/HomeSliderSection";
import HomeAboutSection from "./home/components/home about section/HomeAboutSection";
import HomeServices from "./home/components/home our services/HomeServices";

export default async function Page() {
  const res = await fetch("http://localhost:4000/services", {
    next: { revalidate: 60 * 60 * 12 },
  });

  const services = await res.json();

  return (
    <>
      <Slider />
      <HomeAboutSection />
      <HomeServices services={services} />
    </>
  );
}
