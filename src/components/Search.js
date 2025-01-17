import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import MovieList from './MovieList';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      movies: [],
    };
  }

  onChange = (event) => {
    this.setState({ query: event.target.value })
  }

  onSubmit = (event) => {
    event.preventDefault()
    
    axios.get(`http://localhost:3000/movies?query=${this.state.query}`)
      .then(response => {
        console.log(response.data)
        this.setState({ movies: response.data })
      }).catch(console.log)
  }

  render() {
    return (
      <section className='searchpage'>
        <h2>Search and Add Movies...</h2>
        <form onSubmit={this.onSubmit}>
          <input 
            type='text' 
            placeholder='Search...' 
            value={this.state.query} 
            onChange={this.onChange} 
            className='search-bar'
          />
          <input 
            type='submit' 
            value='Search' 
            className='btn btn-primary'
          />
        </form>
        <MovieList 
          movies={this.state.movies} 
          onSelect={this.props.onAddToLib} 
          buttonText='Add to Library'
        />
      </section>
    )
  }
}

Search.propTypes = {
};

export default Search;
