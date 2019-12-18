import React from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';

const MovieList = (props) => {    
  const movies = props.movies.map((movie, i) => {
    return (<Movie title={movie.title}
              image_url={movie.image_url}
              buttonText='Select'
              onSelect={() => props.onSelect('movie', movie.id)}/>)
  });

  return (
      <section className="cards-container" >
        {movies}
      </section>
  )
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired
};

export default MovieList;
