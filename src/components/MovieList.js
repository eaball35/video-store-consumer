import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class MovieList extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const movies = this.props.movies.map((movie, i) => {
      return <p key={i}>{movie.title}</p>
    });

    return (
      <section>
        {movies}
      </section>
    )
  }
}


MovieList.propTypes = {
  movies: PropTypes.array.isRequired
};

export default MovieList;
