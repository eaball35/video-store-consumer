import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class Checkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  
  render() {
    return ('Checkout')
  }
}


Checkout.propTypes = {
  movies: PropTypes.object.isRequired,
  customers: PropTypes.object.isRequired,
  onCheckout: PropTypes.func.isRequired
};

export default Checkout;
