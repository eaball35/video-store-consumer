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
      movie = <p>Please select a <strong>movie</strong> to checkout.</p>
    }

    if (this.props.customer) {
      customer = <Customer buttonText='remove' {...this.props.customer}/>
    } else {
      customer = <p>Please select a <strong>customer</strong> to checkout.</p>
    }
  
    return (
      <section className='checkout'>
        <h3>Rental Checkout</h3>
        
        <h4>Customer:</h4>
        <section className='checkout-customer'>
          {customer}
        </section>
        
        <h4>Movie:</h4>
        <section className='checkout-movie'>
          {movie}
        </section>
        
        <div className='checkout-btn'>
          <button 
              className="btn btn-primary"
              onClick={this.props.onCheckout}>
              Checkout
          </button>
        </div>
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
