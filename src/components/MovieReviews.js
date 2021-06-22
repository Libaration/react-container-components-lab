import React from "react";

const MovieReviews = (props) => {
  return (
    <div className="review-list">
      {props.reviews.map((review) => {
        return (
          <div className="review">
            <h1>{review.display_title}</h1>
            {review.multimedia !== null ? (
              <img src={review.multimedia.src} />
            ) : (
              ""
            )}
            <h3>{review.summary_short}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default MovieReviews;
