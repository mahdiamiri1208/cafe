import React from "react";
import HomeCommentItem from "./HomeCommentItem";

export default async function HomeComment() {
  const res = await fetch("http://localhost:4000/comments", {
    cache: "no-store",
  });
  const comments = await res.json();

  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="section-title">
          <h4 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>
            Testimonial
          </h4>
          <h1 className="display-4">Our Clients Say</h1>
        </div>
        <div className="owl-carousel testimonial-carousel">
          {comments.map((comment) => (
            <HomeCommentItem key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
    </div>
  );
}
