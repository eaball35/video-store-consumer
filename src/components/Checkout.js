import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';
import Customer from './Customer';

class Checkout extends Component {
  render() {
    let movie, customer

    if (this.props.movie) {
      movie = <Movie 
                buttonText='remove' 
                onSelect={() => this.props.onRemove(this.props.movie)} 
                {...this.props.movie}
              />
    } else {
      movie = <p> Please select a <strong>movie</strong> to checkout.</p>
    }

    if (this.props.customer) {
      customer = <Customer 
                    buttonText='remove' 
                    onSelect={() => this.props.onRemove(this.props.customer)}
                    {...this.props.customer}
                  />
    } else {
      customer = <p> Please select a <strong>customer</strong> to checkout.</p>
    }
    
    return (
      <section className='checkout'>
        <h2>Rental Checkout</h2>
        <div className='checkout-btn'>
          <button 
              className="btn btn-dark"
              onClick={this.props.onCheckout}>
              Checkout
          </button>
        </div>
        
        <h4>Customer:</h4>
        <section className='checkout-customer'>
          {customer}
        </section>
        
        <h4>Movie:</h4>
        <section className='checkout-movie'>
          {movie}
        </section>
      </section>
    )
  }
}

Checkout.propTypes = {
  onCheckout: PropTypes.func.isRequired
};

export default Checkout;
