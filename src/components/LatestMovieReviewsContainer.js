import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";
require("regenerator-runtime/runtime");

const NYT_API_KEY = "gBqMNBCux6IfZq5kHqI9aGj8IZaC7Onu";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/all.json?" +
  `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
    };
  }
  render() {
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }

  async componentDidMount() {
    const response = await fetch(URL);
    const reviews = await response.json();
    this.setState({ reviews: reviews.results });
    // console.log(this.state);
  }
}

export default LatestMovieReviewsContainer;
