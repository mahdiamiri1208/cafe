import React from "react";
import AboutSection from "../components/about section/AboutSection";
import Header from "../components/header/Header";

function page() {
  return (
    <>
      <Header route="About Us"/>
      <AboutSection />
    </>
  );
}

export default page;
