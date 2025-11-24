import React from "react";
import Header from "../components/header/Header";
import Comment from "../components/comment/Comment";

function page() {
  return (
    <>
      <Header route="Testimonial" />
      <Comment />
    </>
  );
}

export default page;
