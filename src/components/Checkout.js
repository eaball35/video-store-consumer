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
    return (
      <section className='checkout'>
        <Movie buttonText='remove' {...this.props.movie}/>
        <Customer buttonText='remove' {...this.props.customer}/>
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
