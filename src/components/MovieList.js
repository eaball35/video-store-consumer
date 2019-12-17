import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';


class MovieList extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const movies = this.props.movies.map((movie, i) => {
      return <Movie title={movie.title} overview={movie.overview} image_url={movie.image_url} />
    });

    return (
        <table className="table">
          <thead className="thead-dark">
            <th></th>
            <th>Title</th>
            <th>Overview</th>
          </thead>
          <tbody>
            {movies}
          </tbody>
        </table>
    )
  }
}


MovieList.propTypes = {
  movies: PropTypes.array.isRequired
};

export default MovieList;
