import React from "react";

export default function HomeCommentItem({ comment }) {
  return (
    <div className="testimonial-item">
      <div className="d-flex align-items-center mb-3">
        <img className="img-fluid" src={comment.img} alt={comment.name} />
        <div className="ml-3">
          <h4>{comment.name}</h4>
          <i>{comment.profession}</i>
        </div>
      </div>
      <p className="m-0">{comment.text}</p>
    </div>
  );
}
