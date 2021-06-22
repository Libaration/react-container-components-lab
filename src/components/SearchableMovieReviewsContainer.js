import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "gBqMNBCux6IfZq5kHqI9aGj8IZaC7Onu";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +
  `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
      searchTerm: "",
    };
  }
  render() {
    return (
      <div className="searchable-movie-reviews">
        <form>
          <input
            type="text"
            value={this.state.searchTerm}
            onChange={(e) => this.handleChange(e)}
          />
          <input type="submit" onClick={(e) => this.searchReviews(e)} />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value,
    });
  };

  searchReviews = async (e) => {
    e.preventDefault();
    const response = await fetch(`${URL}&query=${this.state.searchTerm}`);
    const reviews = await response.json();
    this.setState({
      reviews: reviews.results,
    });
  };
}

export default SearchableMovieReviewsContainer;
