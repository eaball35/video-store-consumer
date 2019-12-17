import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Movie extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <img src={this.props.image_url} className="card-img-top" alt={this.props.title}/>
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    )
  }
}


Movie.propTypes = {
  title: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired
};

export default Movie;
