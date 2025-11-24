import React from "react";
import Header from "../components/header/Header";
import Services from "../components/our services section/Services";

function page() {
  return (
    <>
      <Header route="Services"/>
      <Services />
    </>
  );
}

export default page;
