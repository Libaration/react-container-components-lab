import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "gBqMNBCux6IfZq5kHqI9aGj8IZaC7Onu";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +
  `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {
  render() {
    return <div></div>;
  }
}

export default SearchableMovieReviewsContainer;
