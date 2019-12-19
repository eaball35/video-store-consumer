import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Movie extends Component {

  render() {
    return (
      <div className="card" onClick={this.props.onSelect}>
        <img 
          src={this.props.image_url} 
          className="card-img-top" 
          alt={this.props.title} 
        />
        <div className="card-body">
          <p className="card-title">
            <strong>{this.props.title}</strong>
          </p>
          <button 
            className="btn btn-secondary"
            onClick={this.props.onSelect}>
            {this.props.buttonText}
          </button>
        </div>
      </div>
    )
  }
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Movie;
