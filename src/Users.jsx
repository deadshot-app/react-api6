import React, { Component } from "react";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      review: [],
    };
  }
  componentDidMount() {
    fetch(
      "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=hWMwaUP8sU2WQprj7O50NWjjoAHZQlGl"
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res.results);
        this.setState({ review: res.results });
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div>
        <h1>Movie Review</h1>
        <hr />
        <div>
          {this.state.review.map((result) => (
            <div>
              <h2>Title:{result.display_title}</h2>
              <h3>Critic:{result.byline}</h3>
              <h5>Headline:{result.headline}</h5>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Users;
