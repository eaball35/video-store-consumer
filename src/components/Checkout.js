import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';
import Customer from './Customer';

class Checkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }
 
  render() {
    const { movie, customer } = this.props;
    return (
      <section className='checkout'>
        {movie && <Movie buttonText='remove' {...movie}/>}
        {customer && <Customer buttonText='remove' {...customer}/>}
      </section>
    )
  }
}


Checkout.propTypes = {
  movies: PropTypes.object.isRequired,
  customers: PropTypes.object.isRequired,
  onCheckout: PropTypes.func.isRequired
};

export default Checkout;
