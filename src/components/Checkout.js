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
    let movie, customer

    if (this.props.movie) {
      movie = <Movie buttonText='remove' {...this.props.movie}/>
    } else {
      movie = 'please select a movie'
    }

    if (this.props.customer) {
      customer = <Customer buttonText='remove' {...this.props.customer}/>
    } else {
      customer = 'please select a customer'
    }
   
    return (
      <section className='checkout'>
        <h3>Checkout</h3>
        <h4>Movie</h4>
        {movie}
        <h4>Customer</h4>
        {customer}
        <a className="btn btn-primary"
            onClick={this.props.onCheckout}>
            Checkout
        </a>
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
