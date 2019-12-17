import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Movie extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <tr>
        <td><img src={this.props.image_url} alt={this.props.title}/></td>
        <td>{this.props.title}</td>
        <td>{this.props.overview}</td>
      </tr>
    )
  }
}


Movie.propTypes = {
  
};

export default Movie;
