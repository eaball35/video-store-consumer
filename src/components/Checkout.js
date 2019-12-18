import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';
import Customer from './Customer';

class Checkout extends Component {
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
  
    const messages = () => {
      if (this.props.messages) { 
        if (this.props.messages.success) {
          return <div className="alert alert-success" role="alert"> {this.props.messages.success} </div>
        } else if (this.props.messages.error) {
          return <div className="alert alert-danger" role="alert"> {this.props.messages.error} </div> 
        }
      }
    }
    
    return (
      <section className='checkout'>
        <h3>Rental Checkout</h3>
        {messages()}
        
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
  movie: PropTypes.isRequired,
  customer: PropTypes.isRequired,
  onCheckout: PropTypes.func.isRequired
};

export default Checkout;
